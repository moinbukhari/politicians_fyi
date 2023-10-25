import Dashboard from "@/components/Dashboard";
import HoldingPage from "@/components/HoldingPage";
import PoliticiansList from "@/components/PoliticiansList";
import { Suspense } from "react";

export default async function Home({ searchParams }) {
  if (searchParams.auth == "true") {
    return (
      <main className="container">
        <Dashboard>
          <Suspense fallback={<Loading />}>
            <PoliticiansList />
          </Suspense>
        </Dashboard>
      </main>
    );
  } else {
    return <HoldingPage />;
  }
}

function Loading() {
  return <p>loading...</p>;
}
