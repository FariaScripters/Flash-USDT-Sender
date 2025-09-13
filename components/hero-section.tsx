import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Flash USDT Sender</h1>
        <p className="text-xl mb-8">Fast, secure, and reliable</p>
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-teal-500/20 rounded-lg blur-2xl"></div>
          <Image
            src="/placeholder.svg"
            alt="Product screenshot"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
