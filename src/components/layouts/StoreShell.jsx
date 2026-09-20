import StoreNavbar from "@/components/layouts/top-navigation/StoreNavbar";
import StoreFooter from "@/components/layouts/Footer/StoreFooter";

export default function StoreShell({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <StoreNavbar />
      <main className="flex-1">{children}</main>
      <StoreFooter />
    </div>
  );
}
