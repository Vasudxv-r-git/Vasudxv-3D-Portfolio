import { PROFILE } from "@/constants";

export const metadata = {
  title: "Privacy | Vasudevan R",
};

export default function PrivacyPage() {
  return (
    <main className="h-full w-full">
      <section className="flex flex-col items-center justify-center min-h-screen py-20 section-padding">
        <div className="flex flex-col gap-6 w-full max-w-4xl rounded-lg shadow-lg border border-[#2A0E61] bg-[rgba(3,0,20,0.37)] p-8 md:p-12">
          <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Privacy
          </h1>

          <p className="text-gray-300">
            This is a personal portfolio website for {PROFILE.name}. No
            personal data is collected, stored, or shared when you browse
            these pages.
          </p>

        </div>
      </section>
    </main>
  );
}
