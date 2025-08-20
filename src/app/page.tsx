"use client"

import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarDays, ShieldCheck, Clock, CreditCard, Phone, Mail, MapPin, Trophy, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

// --- Mock data you can swap for live data later ---
const SPORTS = [
  { id: "flag", name: "Flag Football", icon: "🏈", color: "bg-orange-500" },
  { id: "soccer", name: "Soccer", icon: "⚽", color: "bg-green-500" },
  { id: "speed", name: "Speed & Agility", icon: "🏃", color: "bg-blue-500" },
];

const SESSIONS: Record<string, { id: string; name: string; start: string; end: string; price: number }[]> = {
  flag: [
    { id: "fall25", name: "Fall 2025", start: "2025-09-14", end: "2025-11-09", price: 135 },
    { id: "spring26", name: "Spring 2026", start: "2026-03-02", end: "2026-05-04", price: 135 },
  ],
  soccer: [
    { id: "fall25", name: "Fall 2025", start: "2025-09-07", end: "2025-11-02", price: 120 },
    { id: "winter25", name: "Winter 2025", start: "2025-12-07", end: "2026-02-01", price: 120 },
  ],
  speed: [
    { id: "clinic25", name: "8‑Week Clinic", start: "2025-10-01", end: "2025-11-26", price: 99 },
  ],
};

const VENUE = {
  name: "Quad Sports Complex",
  addr: "123 League Way, Richmond, TX",
};

// Helper to compute age from DOB at session start
function ageOnDate(dob: string, startISO: string) {
  if (!dob || !startISO) return null;
  const d = new Date(dob);
  const s = new Date(startISO);
  if (isNaN(d.getTime()) || isNaN(s.getTime())) return null;
  let age = s.getFullYear() - d.getFullYear();
  const m = s.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && s.getDate() < d.getDate())) age--;
  return age;
}

function divisionFromAge(age: number | null) {
  if (age == null || age < 4) return "Tots (3‑4)";
  if (age <= 5) return "U6 (5 & under)";
  if (age <= 7) return "U8";
  if (age <= 9) return "U10";
  if (age <= 11) return "U12";
  if (age <= 13) return "U14";
  return "Teens";
}

export default function MobileRegistrationDemo() {
  const [sport, setSport] = useState<string>("flag");
  const [sessionId, setSessionId] = useState<string>(SESSIONS["flag"][0].id);
  const [childFirst, setChildFirst] = useState("");
  const [childLast, setChildLast] = useState("");
  const [dob, setDob] = useState("");
  const [jersey, setJersey] = useState<string>("");
  const [guardianEmail, setGuardianEmail] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");
  const [agreed, setAgreed] = useState(false);

  const sessions = useMemo(() => SESSIONS[sport] || [], [sport]);
  const selectedSession = useMemo(() => sessions.find((s) => s.id === sessionId) || sessions[0], [sessions, sessionId]);
  const age = useMemo(() => ageOnDate(dob, selectedSession?.start || ""), [dob, selectedSession]);
  const division = useMemo(() => divisionFromAge(age), [age]);

  const price = selectedSession?.price ?? 0;
  const canPay = childFirst && childLast && dob && jersey && guardianEmail && guardianPhone && agreed;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-3 sm:p-6">
      <div className="mx-auto max-w-md">
        <motion.header 
          initial={{ opacity: 0, y: -8 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="mb-6 text-center"
        >
          <div className="mb-4 flex items-center justify-center">
            <div className="mr-3 rounded-full bg-gradient-to-r from-blue-600 to-green-600 p-3">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Quad Sports</h1>
              <p className="text-sm text-gray-600">Building Champions, Creating Memories</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">Quick Registration • Mobile‑first demo</p>
        </motion.header>

        {/* Program Card */}
        <motion.section 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="rounded-2xl shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                Choose Your Program
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {SPORTS.map((s) => (
                  <Button
                    key={s.id}
                    variant={sport === s.id ? "default" : "outline"}
                    className={`rounded-xl h-auto p-3 flex flex-col items-center gap-1 transition-all duration-200 ${
                      sport === s.id 
                        ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg scale-105' 
                        : 'hover:scale-105 hover:shadow-md'
                    }`}
                    onClick={() => {
                      setSport(s.id);
                      setSessionId(SESSIONS[s.id][0].id);
                    }}
                  >
                    <span className="text-lg">{s.icon}</span>
                    <span className="text-xs font-medium">{s.name}</span>
                  </Button>
                ))}
              </div>

              <div>
                <Label className="mb-2 block text-sm font-medium text-gray-700">Session</Label>
                <Select value={sessionId} onValueChange={setSessionId}>
                  <SelectTrigger className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select session" />
                  </SelectTrigger>
                  <SelectContent align="start">
                    {sessions.map((s) => (
                      <SelectItem key={s.id} value={s.id}>
                        <div className="flex flex-col">
                          <span className="font-medium">{s.name}</span>
                          <span className="text-xs text-gray-500">
                            {new Date(s.start).toLocaleDateString()}–{new Date(s.end).toLocaleDateString()}
                          </span>
                          <span className="text-xs font-semibold text-green-600">${s.price}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-3 text-sm text-gray-600 bg-blue-50 rounded-xl p-3">
                  <CalendarDays className="mt-0.5 h-4 w-4 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-800">
                      <strong>Sundays</strong> at {sport === "flag" ? "2–5pm" : sport === "soccer" ? "9–12pm" : "Wed 6–7pm"}
                    </p>
                    <p className="text-xs text-gray-500">{VENUE.name}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <MapPin className="mt-0.5 h-4 w-4 text-gray-500" />
                  <p>{VENUE.addr}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Player Card */}
        <motion.section 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6"
        >
          <Card className="rounded-2xl shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                Player Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="mb-2 block text-sm font-medium text-gray-700">First name</Label>
                  <Input 
                    value={childFirst} 
                    onChange={(e) => setChildFirst(e.target.value)} 
                    className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
                    placeholder="Alex" 
                  />
                </div>
                <div>
                  <Label className="mb-2 block text-sm font-medium text-gray-700">Last name</Label>
                  <Input 
                    value={childLast} 
                    onChange={(e) => setChildLast(e.target.value)} 
                    className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
                    placeholder="Jordan" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="mb-2 block text-sm font-medium text-gray-700">Date of Birth</Label>
                  <Input 
                    type="date" 
                    value={dob} 
                    onChange={(e) => setDob(e.target.value)} 
                    className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
                  />
                </div>
                <div>
                  <Label className="mb-2 block text-sm font-medium text-gray-700">Division</Label>
                  <Input 
                    readOnly 
                    value={division || "—"} 
                    className="rounded-xl bg-gray-50 border-gray-200 text-gray-600" 
                  />
                </div>
              </div>

              <div>
                <Label className="mb-2 block text-sm font-medium text-gray-700">Jersey size</Label>
                <Select value={jersey} onValueChange={setJersey}>
                  <SelectTrigger className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {["YS","YM","YL","AS","AM","AL"].map((sz) => (
                      <SelectItem key={sz} value={sz}>{sz}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <Label className="mb-2 block text-sm font-medium text-gray-700">Guardian email</Label>
                  <Input 
                    type="email" 
                    value={guardianEmail} 
                    onChange={(e) => setGuardianEmail(e.target.value)} 
                    className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
                    placeholder="you@example.com" 
                  />
                </div>
                <div>
                  <Label className="mb-2 block text-sm font-medium text-gray-700">Guardian phone</Label>
                  <Input 
                    type="tel" 
                    value={guardianPhone} 
                    onChange={(e) => setGuardianPhone(e.target.value)} 
                    className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
                    placeholder="555‑123‑4567" 
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-gradient-to-r from-blue-50 to-green-50 p-4 text-sm border border-blue-100">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-800 mb-1">Safety & Policies</p>
                  <p className="text-gray-600">
                    By registering, you agree to the league waiver and code of conduct. 
                    Uniform included. Refunds available before week 2.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Summary & Pay */}
        <motion.section 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <Card className="rounded-2xl shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-green-600" />
                Review & Complete Registration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 p-3 border border-blue-200">
                  <div className="font-semibold text-blue-800">Program</div>
                  <div className="text-blue-700">{SPORTS.find((s) => s.id === sport)?.name}</div>
                </div>
                <div className="rounded-xl bg-gradient-to-r from-green-50 to-green-100 p-3 border border-green-200">
                  <div className="font-semibold text-green-800">Session</div>
                  <div className="text-green-700">{selectedSession?.name}</div>
                </div>
                <div className="rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 p-3 border border-purple-200">
                  <div className="font-semibold text-purple-800">Division</div>
                  <div className="text-purple-700">{division}</div>
                </div>
                <div className="rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 p-3 border border-orange-200">
                  <div className="font-semibold text-orange-800">Price</div>
                  <div className="text-2xl font-bold text-orange-700">${price}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <Checkbox 
                  id="agree" 
                  checked={agreed} 
                  onCheckedChange={(v) => setAgreed(Boolean(v))} 
                  className="mt-0.5"
                />
                <Label htmlFor="agree" className="text-sm text-gray-700 leading-relaxed">
                  I agree to league policies and consent to texts/email about my child's program. 
                  I understand this is a commitment to the full season.
                </Label>
              </div>

              <Button
                className={`w-full rounded-xl text-base font-semibold transition-all duration-200 ${
                  canPay 
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg hover:shadow-xl transform hover:scale-105' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                size="lg"
                disabled={!canPay}
                onClick={() => alert("This is a demo. Hook this button to Stripe Checkout or Payment Element.")}
              >
                <CreditCard className="mr-2 h-5 w-5" /> 
                {canPay ? `Pay $${price} & Register` : 'Complete All Fields'}
              </Button>

              <div className="flex items-start gap-3 text-xs text-gray-500 bg-gray-50 rounded-xl p-3">
                <Clock className="mt-0.5 h-4 w-4" />
                <div>
                  <p className="font-medium text-gray-700 mb-1">Quick & Secure</p>
                  <p>Checkout takes under 60 seconds. You'll get a confirmation email and calendar invite.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Footer / Contact */}
        <motion.footer 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 mb-16 text-center"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-700 mb-3">Questions? We're here to help!</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-600">
              <span className="inline-flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                <Mail className="h-3 w-3 text-blue-600" /> 
                support@quadsports.org
              </span>
              <span className="inline-flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
                <Phone className="h-3 w-3 text-green-600" /> 
                (281) 555‑0199
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              © 2025 Quad Sports Complex • Building Champions, Creating Memories
            </p>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}