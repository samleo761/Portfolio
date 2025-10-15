import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
       
       

        <div className="grid grid-row-1 md:grid-row-2">
          <div className="space-y-20">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3">
  <div className="space-y-6 flex flex-col items-center md:items-start">
    <div className="flex items-center space-x-10">
      <div className="p-3 rounded-full bg-primary/10">
        <Mail className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h4 className="font-medium">Email</h4>
        <a
          href="mailto:samleo7708@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          samleo7708@gmail.com
        </a>
      </div>
    </div>
  </div>
  <div className="space-y-6 flex flex-col items-center md:items-start">
    <div className="flex items-center space-x-10">
      <div className="p-3 rounded-full bg-primary/10">
        <Phone className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h4 className="font-medium">Phone</h4>
        <a
          href="tel:+91 7708118184"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          +91 770 8118 184
        </a>
      </div>
    </div>
  </div>
  <div className="space-y-6 flex flex-col items-center md:items-start">
    <div className="flex items-center space-x-10">
      <div className="p-3 rounded-full bg-primary/10">
        <MapPin className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h4 className="font-medium">Location</h4>
        <span className="text-muted-foreground">Thanjavur, TamilNadu, India</span>
      </div>
    </div>
  </div>
</div>

            <div className="pt-1
          ">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/sam-leo-0b7094301/?trk=opento_sprofile_topcard" target="_blank">
                  <Linkedin />
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
