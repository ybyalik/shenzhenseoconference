import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import Sponsors from "@/pages/sponsors";
import Speakers from "@/pages/speakers";
import PlanYourTrip from "@/pages/plan-your-trip";
import Contact from "@/pages/contact";
import TermsConditions from "@/pages/terms-conditions";
import PrivacyPolicy from "@/pages/privacy-policy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sponsors/" component={Sponsors} />
      <Route path="/speakers/" component={Speakers} />
      <Route path="/plan-your-trip/" component={PlanYourTrip} />
      <Route path="/contact/" component={Contact} />
      <Route path="/terms-conditions/" component={TermsConditions} />
      <Route path="/privacy-policy/" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Router />
          </div>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
