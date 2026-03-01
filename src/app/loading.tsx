export default function Loading() {
  return (
    <div className="fixed inset-0 bg-navy-950 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="font-display text-4xl md:text-5xl font-bold text-gold mb-8">
          MEGAFIXX
        </div>
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 border-4 border-gold/30 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-gold rounded-full animate-spin" />
        </div>
      </div>
    </div>
  );
}
