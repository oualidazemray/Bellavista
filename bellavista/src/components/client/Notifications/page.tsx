import { useState } from "react";
import { Bell, Globe, ChevronRight, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Mock notification data - this would be replaced by API calls in a real app
const mockNotifications = [
  {
    id: 1,
    title: "Votre séjour à l'hôtel Bellavista est confirmé ! 🌴",
    isRead: false,
    content: {
      subject: "Votre séjour à l'hôtel Bellavista est confirmé ! 🌴",
      recipient: "AZEMRAY",
      message:
        "Nous sommes ravis de vous annoncer que votre réservation pour la chambre 102 a été validée avec succès.",
      details: [
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
      closing: "À très bientôt sous le soleil,",
      signature: "L'équipe Bellavista",
      tagline:
        "Préparez-vous à vivre l'expérience Bellavista - où chaque détail compte.",
      contact: {
        phone: "+0633333333",
        website: "www.bellavista.com",
      },
    },
  },
  {
    id: 2,
    title: "Notifications en temps réel sur la validation ...",
    isRead: true,
    content: {
      subject:
        "Notifications en temps réel sur la validation de votre paiement",
      recipient: "AZEMRAY",
      message:
        "Votre paiement est en cours de traitement par notre système bancaire.",
      details: ["Montant : [10000DH]", "Carte : [XXX9]", "Date : [05-10-2025]"],
      nextSteps: [
        "La confirmation finale sera envoyée dans les prochaines 24 heures.",
      ],
      closing: "Merci pour votre patience,",
      signature: "Service financier Bellavista",
    },
  },
  {
    id: 3,
    title: "Notifications en temps réel sur la validation ...",
    isRead: true,
    content: {
      subject: "Mise à jour des services disponibles",
      recipient: "AZEMRAY",
      message:
        "Nous avons mis à jour les services disponibles pour votre séjour.",
      details: [
        "Spa : Disponible de 9h à 19h",
        "Restaurant principal : Réservation recommandée",
        "Activités nautiques : Selon conditions météo",
      ],
      closing: "Au plaisir de vous accueillir,",
      signature: "Service client Bellavista",
    },
  },
  {
    id: 4,
    title: "Notifications en temps réel sur la validation ...",
    isRead: true,
    content: {
      subject: "Promotion spéciale pour votre prochain séjour",
      recipient: "AZEMRAY",
      message:
        "En tant que client fidèle, nous vous offrons une réduction pour votre prochain séjour.",
      details: [
        "Réduction : 15% sur votre prochaine réservation",
        "Code promo : BELLAVIP2025",
        "Validité : 6 mois",
      ],
      closing: "À bientôt pour un nouveau séjour,",
      signature: "Équipe marketing Bellavista",
    },
  },
  {
    id: 5,
    title: "Notifications en temps réel sur la validation ...",
    isRead: true,
    content: {
      subject: "Rappel de votre check-in",
      recipient: "AZEMRAY",
      message:
        "Nous vous rappelons que le check-in pour votre séjour approche.",
      details: [
        "Date d'arrivée : [10-10-2025]",
        "Heure de check-in : À partir de 14h00",
        "Service de navette : Disponible sur demande",
      ],
      nextSteps: [
        "N'oubliez pas votre pièce d'identité et la carte utilisée pour le paiement.",
      ],
      closing: "En attendant le plaisir de vous accueillir,",
      signature: "Service de réception Bellavista",
    },
  },
];

export default function NotificationComponent() {
  const [selectedNotification, setSelectedNotification] = useState(
    mockNotifications[0]
  );
  const [unreadCount, setUnreadCount] = useState(
    mockNotifications.filter((n) => !n.isRead).length
  );

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);

    // Mark as read if it wasn't already
    if (!notification.isRead) {
      // In a real app, you would call an API here
      // For now, just update the mock data
      notification.isRead = true;
      setUnreadCount((prev) => Math.max(0, prev - 1));
    }
  };

  return (
    <div className="flex h-full bg-amber-950 text-amber-100">
      {/* Notifications Sidebar */}
      <div className="w-80 border-r border-amber-800 bg-black bg-opacity-80 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-amber-800">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Bell className="w-6 h-6 text-amber-300 mr-3" />
              <h2 className="text-2xl font-serif text-amber-300">
                Notifications
              </h2>
              {unreadCount > 0 && (
                <div className="ml-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
                  {unreadCount}
                </div>
              )}
            </div>
            <button className="text-amber-300">
              <Settings className="w-5 h-5" />
            </button>
          </div>
          <div className="border-t border-amber-800 mt-1"></div>
        </div>

        {/* Notification List */}
        <div className="overflow-y-auto flex-1">
          {mockNotifications.map((notification) => (
            <button
              key={notification.id}
              className={`w-full text-left p-4 flex items-start border-b border-amber-900 hover:bg-amber-900 hover:bg-opacity-40 transition-colors ${
                selectedNotification.id === notification.id
                  ? "bg-amber-900 bg-opacity-30"
                  : ""
              }`}
              onClick={() => handleNotificationClick(notification)}
            >
              <ChevronRight className="w-5 h-5 mt-1 mr-2 flex-shrink-0" />
              <div>
                <div className="flex items-center">
                  {!notification.isRead && (
                    <div className="h-2 w-2 bg-red-500 rounded-full mr-2"></div>
                  )}
                  <p className={`${!notification.isRead ? "font-medium" : ""}`}>
                    {notification.title}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-black bg-opacity-70 p-8 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedNotification.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            {/* Notification Content */}
            <div className="text-amber-300 text-xl mb-6 font-serif">
              Objet : {selectedNotification.content.subject}
            </div>

            <div className="mb-6">
              <p className="text-amber-100 mb-4">
                Cher {selectedNotification.content.recipient},
              </p>
              <p className="text-amber-100 mb-6">
                {selectedNotification.content.message}
              </p>
            </div>

            {selectedNotification.content.details && (
              <div className="mb-6">
                <p className="text-amber-100 mb-2">
                  Détails de votre réservation :
                </p>
                <ul className="list-disc pl-6 text-amber-100">
                  {selectedNotification.content.details.map((detail, idx) => (
                    <li key={idx} className="mb-1">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedNotification.content.nextSteps && (
              <div className="mb-6">
                <p className="text-amber-100 mb-2">Prochaines étapes :</p>
                <ul className="list-disc pl-6 text-amber-100">
                  {selectedNotification.content.nextSteps.map((step, idx) => (
                    <li key={idx} className="mb-1">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8">
              <p className="text-amber-100">
                {selectedNotification.content.closing}
              </p>
              <p className="text-amber-100 mt-1">
                {selectedNotification.content.signature}
              </p>

              {selectedNotification.content.tagline && (
                <p className="text-amber-300 text-sm mt-6 italic">
                  ✧ {selectedNotification.content.tagline}
                </p>
              )}

              {selectedNotification.content.contact && (
                <div className="flex items-center mt-3 text-sm text-amber-100">
                  {selectedNotification.content.contact.phone && (
                    <span className="mr-4">
                      {selectedNotification.content.contact.phone}
                    </span>
                  )}
                  {selectedNotification.content.contact.website && (
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-1" />
                      <span>
                        {selectedNotification.content.contact.website}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
