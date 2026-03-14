import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#042412] text-[#e8ffef] relative mt-20">
      <div className="w-full max-w-[1381px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          <div className="bg-white/5 border border-white/10 px-4 py-3 [font-family:'Poppins',Helvetica] text-sm text-[#d3efe0]">
            Secure Checkout
          </div>
          <div className="bg-white/5 border border-white/10 px-4 py-3 [font-family:'Poppins',Helvetica] text-sm text-[#d3efe0]">
            Easy 7-Day Returns
          </div>
          <div className="bg-white/5 border border-white/10 px-4 py-3 [font-family:'Poppins',Helvetica] text-sm text-[#d3efe0]">
            Worldwide Shipping
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <h2 className="[font-family:'Italiana',Helvetica] text-[40px] tracking-wide text-white">
              Arknetic
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-light text-sm text-[#a3c9b3] leading-relaxed">
              Home to Arknetic  Fashion and Arknetic Collections, crafted for everyday wear and premium designer statements.
            </p>
            <div className="flex gap-4 items-center mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#006838] transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#006838] transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#006838] transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#006838] transition-colors"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-6 lg:ml-8">
            <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-lg text-white">Shop</h3>
            <ul className="flex flex-col gap-4 [font-family:'Poppins',Helvetica] font-light text-sm text-[#a3c9b3]">
              <li><a href="/" className="hover:text-white transition-colors">Arknetic  Fashion</a></li>
              <li><a href="/collections" className="hover:text-white transition-colors">Arknetic Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Office Wear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Formal Wear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Party Wear</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col gap-6">
            <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-lg text-white">Customer Care</h3>
            <ul className="flex flex-col gap-4 [font-family:'Poppins',Helvetica] font-light text-sm text-[#a3c9b3]">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bulk & Styling Inquiries</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-6">
            <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-lg text-white">Join Our Newsletter</h3>
            <p className="[font-family:'Poppins',Helvetica] font-light text-sm text-[#a3c9b3]">
              Subscribe for Arknetic  Fashion drops, Arknetic Collections launches, and private sale access.
            </p>
            <div className="flex flex-col gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-12 focus-visible:ring-[#006838]"
              />
              <Button className="h-12 w-full bg-[#006838] hover:bg-[#017f45] text-white [font-family:'Inder',Helvetica] text-base rounded-none transition-colors border-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="[font-family:'Poppins',Helvetica] font-light text-sm text-[#a3c9b3]">
            © {new Date().getFullYear()} Arknetic. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 [font-family:'Poppins',Helvetica] font-light text-sm text-[#a3c9b3]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
