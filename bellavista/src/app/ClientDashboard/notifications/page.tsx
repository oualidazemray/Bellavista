"use client";

import { useState } from "react";
import { Image } from "lucide-react";
import { Sidebar } from "@/components/ui/ClientSideBar";

// Types
type Notification = {
  id: string;
  title: string;
  isNew?: boolean;
  details: {
    subject: string;
    recipient: string;
    content: string;
    bulletPoints: string[];
    nextSteps?: string[];
    signature?: string;
    tagline?: string;
    contact?: {
      phone?: string;
      website?: string;
    };
  };
};

function notifications() {
  // Sample notifications data
  const notifications: Notification[] = [
    {
      id: "1",
      title: "Votre séjour à l'hôtel Bellavista est confirmé ! 🌴",
      isNew: true,
      details: {
        subject: "Votre séjour à l'hôtel Bellavista est confirmé ! 🌴",
        recipient: "AZEMRAY",
        content:
          "Nous sommes ravis de vous annoncer que votre réservation pour la chambre 102 a été validée avec succès.",
        bulletPoints: [
          "Chambre : 102 (Chambre Deluxe Vue Océan)",
          "Dates : [10-10-2025] au [15-10-2025]",
          "Nombre de nuits : [X]",
          "Total : [10000DH] (incluant taxes et frais)",
          "Mode de paiement : [Carte XXX9]",
        ],
        nextSteps: [
          "Vous recevrez un e-mail avec votre QR code pour un check-in express.",
          "Notre équipe se tient prête pour répondre à vos demandes spéciales ([email protected]).",
        ],
        signature: "L'équipe Bellavista",
        tagline:
          '"Préparez-vous à vivre l\'expérience Bellavista – où chaque détail compte."',
        contact: {
          phone: "+0655555555",
          website: "www.bellavista.com",
        },
      },
    },
    {
      id: "2",
      title: "Notifications en temps réel sur la validation ...",
      details: {
        subject: "Mise à jour de votre commande #45632",
        recipient: "AZEMRAY",
        content: "Votre commande a été expédiée et est en route.",
        bulletPoints: [
          "Numéro de suivi : TRK78945612",
          "Date d'expédition : 08-05-2025",
          "Date de livraison prévue : 12-05-2025",
        ],
        signature: "Service Client",
        contact: {
          phone: "+0655555555",
        },
      },
    },
    {
      id: "3",
      title: "Notifications en temps réel sur la validation ...",
      details: {
        subject: "Confirmation de paiement",
        recipient: "AZEMRAY",
        content: "Nous confirmons la réception de votre paiement.",
        bulletPoints: [
          "Montant : 750 DH",
          "Date : 05-05-2025",
          "Référence : PAY-456789",
        ],
        signature: "Service Financier",
        contact: {
          phone: "+0655555555",
        },
      },
    },
    {
      id: "4",
      title: "Notifications en temps réel sur la validation ...",
      details: {
        subject: "Invitation à un événement exclusif",
        recipient: "AZEMRAY",
        content: "Vous êtes cordialement invité à notre soirée VIP.",
        bulletPoints: [
          "Date : 20-05-2025",
          "Heure : 19h00",
          "Lieu : Bellavista Lounge",
        ],
        nextSteps: [
          "Veuillez confirmer votre présence avant le 15 mai.",
          "Un code vestimentaire élégant est requis.",
        ],
        signature: "Événements Bellavista",
        contact: {
          phone: "+0655555555",
        },
      },
    },
    {
      id: "5",
      title: "Notifications en temps réel sur la validation ...",
      details: {
        subject: "Mise à jour de nos conditions",
        recipient: "AZEMRAY",
        content: "Nous avons mis à jour nos conditions d'utilisation.",
        bulletPoints: [
          "Date d'effet : 01-06-2025",
          "Principales modifications : Politique de confidentialité",
          "Impact pour vous : Minimal",
        ],
        signature: "Service Juridique",
        contact: {
          website: "www.bellavista.com/legal",
        },
      },
    },
  ];

  // State for selected notification
  const [selectedNotif, setSelectedNotif] = useState<Notification>(
    notifications[0]
  );

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/beachBack.jpg"
          alt="Beach sunset background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Main Content - Adjust right padding for sidebar */}
      <div className="flex h-screen  text-white overflow-hidden relative">
        {/* Background gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-amber-900 to-amber-950 opacity-30"
          style={{
            backgroundImage: "url('/api/placeholder/1900/1000')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        />

        {/* Container */}
        <div className="relative mx-auto my-12 w-full max-w-6xl h-5/6 rounded-3xl overflow-hidden flex bg-opacity-80 border border-amber-700/30">
          {/* Left Column - Notification List */}
          <div className="w-1/3 border-r border-amber-700/30 bg-opacity-70 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center mb-8">
                <div className="relative">
                  <span className="inline-block h-6 w-6 text-xl">🔔</span>
                  {/* Red dot for new notifications */}
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                </div>
                <h2 className="ml-3 text-3xl font-light text-amber-200">
                  Notifications
                </h2>
              </div>

              <div className="space-y-4">
                {notifications.map((notif) => (
                  <button
                    key={notif.id}
                    onClick={() => setSelectedNotif(notif)}
                    className={`w-full text-left p-4 rounded-lg flex items-start space-x-3 transition-all hover:bg-amber-900/30 ${
                      selectedNotif.id === notif.id
                        ? "bg-amber-800/20 border-l-2 border-amber-400"
                        : ""
                    }`}
                  >
                    <div className="mt-1">≫</div>
                    <div>
                      <div className="flex items-center">
                        <p className="text-amber-200 font-light">
                          {notif.title}
                        </p>
                        {notif.isNew && (
                          <span className="ml-2 h-2 w-2 bg-red-500 rounded-full"></span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Notification Details */}
          <div className="w-2/3 overflow-y-auto p-8">
            {selectedNotif && (
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-amber-300">
                    Objet : {selectedNotif.details.subject}
                  </h3>
                </div>

                <div className="flex-grow">
                  <p className="text-amber-200 mb-4">
                    Cher {selectedNotif.details.recipient},
                  </p>

                  <p className="mb-4 text-white">
                    {selectedNotif.details.content}
                  </p>

                  {selectedNotif.details.bulletPoints && (
                    <div className="mb-6">
                      <p className="text-white mb-2">
                        Détails de votre réservation :
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        {selectedNotif.details.bulletPoints.map(
                          (point, index) => (
                            <li key={index} className="text-amber-100">
                              <span className="text-amber-300">•</span> {point}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  {selectedNotif.details.nextSteps && (
                    <div className="mb-8">
                      <p className="text-white mb-2">Prochaines étapes :</p>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        {selectedNotif.details.nextSteps.map((step, index) => (
                          <li key={index} className="text-amber-100">
                            <span className="text-amber-300">•</span> {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-auto">
                    <p className="text-amber-200 mb-1">
                      À très bientôt sous le soleil,
                    </p>
                    <p className="text-amber-200 mb-6">
                      {selectedNotif.details.signature}
                    </p>

                    {selectedNotif.details.tagline && (
                      <p className="text-amber-400 text-sm italic mb-4">
                        ✨ {selectedNotif.details.tagline}
                      </p>
                    )}

                    {selectedNotif.details.contact && (
                      <div className="flex items-center space-x-4 text-sm text-amber-300">
                        {selectedNotif.details.contact.phone && (
                          <div className="flex items-center">
                            <span className="mr-1">📞</span>
                            <span>{selectedNotif.details.contact.phone}</span>
                          </div>
                        )}

                        {selectedNotif.details.contact.website && (
                          <div className="flex items-center">
                            <span className="mr-1">🌐</span>
                            <span>{selectedNotif.details.contact.website}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Controls icon in top right */}
          <div className="absolute top-6 right-6 text-amber-300">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}
export default notifications;
