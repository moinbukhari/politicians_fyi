import Dashboard from "@/components/Dashboard";
import PoliticiansList from "@/components/PoliticiansList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="container">
      <Dashboard>
        <Suspense fallback={<Loading />}>
          <PoliticiansList />
        </Suspense>
      </Dashboard>
    </main>
  );
}

function Loading() {
  return <p>loading...</p>;
}
