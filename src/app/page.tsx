import LayoutComponent from "@/component/layout";
import Image from "next/image";

export default function Home() {
  return (
    <LayoutComponent>
      <div className="bg-brand-green-300 text-white p-5">
        <h1 className="text-3xl font-bold">Welcome to the Theme Test!</h1>
        <p className="text-lg">This page is using the custom theme.</p>
      </div>
    </LayoutComponent>
  );
}
