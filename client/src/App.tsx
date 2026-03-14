import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { HomePageUi } from "@/pages/HomePageUi";
import { ProductDetailsPageUi } from "@/pages/ProductDetailsPageUi";
import { CollectionsPageUi } from "@/pages/CollectionsPageUi";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={HomePageUi} />
      <Route path="/product/:id" component={ProductDetailsPageUi} />
      <Route path="/collections" component={CollectionsPageUi} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
