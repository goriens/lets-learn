import SideBar from "@/components/sidebar/SideBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container h-screen flex pt-24">
      <aside className="w-80 overflow-y-auto bg-secondary mx-2 rounded-sm">
        <SideBar />
      </aside>
      <main className="flex-1 overflow-y-auto bg-secondary mx-2 rounded-sm">
        {children}
      </main>
    </div>
  );
}
