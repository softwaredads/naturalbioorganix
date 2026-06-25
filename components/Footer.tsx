export default function Footer() {
  return (
    <footer className="border-t border-brand-cream bg-background px-6 py-5">
      <p className="text-center text-xs text-brand-muted">
        &copy; {new Date().getFullYear()} The Natural. All rights reserved.
      </p>
    </footer>
  );
}
