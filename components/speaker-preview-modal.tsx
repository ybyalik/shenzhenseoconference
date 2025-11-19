import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, MapPin, Calendar, Users } from "lucide-react";

interface SpeakerPreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  speaker: {
    name: string;
    role: string;
    company: string;
    bio: string;
    expertise: string[];
    sessionTitle: string;
    sessionTime: string;
    image: string;
  } | null;
}

export default function SpeakerPreviewModal({ open, onOpenChange, speaker }: SpeakerPreviewModalProps) {
  if (!speaker) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="speaker-modal">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4" data-testid="modal-speaker-name">
            <img 
              src={speaker.image} 
              alt={speaker.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold">{speaker.name}</h3>
              <p className="text-muted-foreground">{speaker.role}</p>
              <p className="text-sm text-muted-foreground">{speaker.company}</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <DialogDescription className="text-base leading-relaxed" data-testid="modal-speaker-bio">
            {speaker.bio}
          </DialogDescription>

          <div>
            <h4 className="font-semibold mb-3">Areas of Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {speaker.expertise.map((skill, index) => (
                <Badge key={index} variant="secondary" data-testid={`modal-expertise-${index}`}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Session Preview
            </h4>
            <p className="font-medium mb-2" data-testid="modal-session-title">{speaker.sessionTitle}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              <span data-testid="modal-session-time">{speaker.sessionTime}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              className="flex-1" 
              onClick={() => {
                onOpenChange(false);
                document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' });
              }}
              data-testid="modal-register-button"
            >
              Register for Conference
            </Button>
            <Button variant="outline" onClick={() => onOpenChange(false)} data-testid="modal-close-button">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}