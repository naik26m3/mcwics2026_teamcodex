"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const ONBOARDING_STEPS = [
  {
    id: "vibe",
    title: "The Vibe Check",
    question: "Describe your ideal 'quiet' hangout vibe.",
    description: "Our AI uses this to understand your social energy.",
    placeholder: "e.g., A rainy afternoon in a library with lo-fi music...",
    type: "textarea",
  },
  {
    id: "interests",
    title: "Your Circle",
    question: "What are some of your favorite hobbies?",
    description: "Pick things that make you happy. This helps us find your match.",
    placeholder: "e.g., Coding, Jazz, Hiking, Studio Ghibli",
    type: "text",
  }
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    vibe: "",
    interests: "",
  });
  const [issubmitting, setIsSubmitting] = useState(false);

  const currentStepData = ONBOARDING_STEPS[step];

  const handleNext = () => {
    if (step < ONBOARDING_STEPS.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const savedUser = JSON.parse(localStorage.getItem("user_session") || "{}");
      
      // Split interests by comma and trim whitespace
      const interestArray = formData.interests.split(",").map(i => i.trim());

      const payload = {
        ...savedUser,
        onboarding_completed: True,
        user_profile: {
          summary: formData.vibe,
          tags: {
            likes: interestArray,
            dislikes: [] // Can be expanded later
          }
        },
        // Default matching attributes for the engine
        matching_attributes: {
          energy_level: 5, // Default middle ground
          social_style: "Quiet",
          must_avoid: []
        }
      };

      // Update backend
      const response = await fetch(`http://localhost:8000/users/${savedUser.id}/update-profile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        localStorage.setItem("user_session", JSON.stringify(payload));
        router.push("/home");
      }
    } catch (error) {
      console.error("Onboarding failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[25%] -left-[10%] w-[50%] h-[50%] bg-[#D4FF3F]/5 blur-[120px] rounded-full" />
      </div>

      <Card className="max-w-xl w-full p-8 border-white/5 bg-zinc-900/50 backdrop-blur-xl shadow-2xl relative">
        {/* Progress Bar */}
        <div className="flex gap-2 mb-8">
          {ONBOARDING_STEPS.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= step ? 'bg-[#D4FF3F]' : 'bg-white/10'}`} 
            />
          ))}
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4FF3F] flex items-center gap-2">
              <Sparkles className="h-3 w-3" /> Step {step + 1} of {ONBOARDING_STEPS.length}
            </h3>
            <h1 className="text-3xl font-black italic tracking-tighter uppercase">{currentStepData.title}</h1>
            <p className="text-zinc-400 text-sm font-medium">{currentStepData.description}</p>
          </div>

          <div className="space-y-4 py-4">
            <label className="text-lg font-bold text-white block">
              {currentStepData.question}
            </label>
            
            {currentStepData.type === "textarea" ? (
              <Textarea
                value={formData.vibe}
                onChange={(e) => setFormData({ ...formData, vibe: e.target.value })}
                placeholder={currentStepData.placeholder}
                className="min-h-[150px] bg-white/5 border-white/10 focus:border-[#D4FF3F]/50 transition-all resize-none text-base"
              />
            ) : (
              <Input
                value={formData.interests}
                onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                placeholder={currentStepData.placeholder}
                className="h-14 bg-white/5 border-white/10 focus:border-[#D4FF3F]/50 text-base"
              />
            )}
          </div>

          <Button 
            onClick={handleNext}
            disabled={issubmitting || (currentStepData.id === 'vibe' ? !formData.vibe : !formData.interests)}
            className="w-full h-14 bg-[#D4FF3F] hover:bg-[#D4FF3F]/90 text-black font-black uppercase tracking-widest group"
          >
            {issubmitting ? (
              "Synchronizing..."
            ) : step === ONBOARDING_STEPS.length - 1 ? (
              <span className="flex items-center gap-2">Finish Setup <CheckCircle2 className="h-5 w-5" /></span>
            ) : (
              <span className="flex items-center gap-2">Next Step <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></span>
            )}
          </Button>
        </div>
      </Card>
    </div>
  );
}