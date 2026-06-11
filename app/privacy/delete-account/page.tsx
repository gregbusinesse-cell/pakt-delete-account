'use client'

export default function DeleteAccountPage() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:paktsupport@gmail.com?subject=Demande de suppression de compte PAKT&body=Bonjour,%0A%0AJe souhaite supprimer mon compte PAKT.%0A%0AMerci de confirmer la suppression.%0A%0ACordialement'
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Logo/Header */}
        <div style={styles.header}>
          <div style={styles.logo}>🌟</div>
          <h1 style={styles.title}>Suppression de Compte PAKT</h1>
        </div>

        {/* Main Content */}
        <div style={styles.content}>
          <p style={styles.intro}>
            Vous souhaitez supprimer votre compte PAKT ? Voici les options disponibles :
          </p>

          {/* Option 1: In-App */}
          <div style={styles.option}>
            <div style={styles.optionNumber}>1</div>
            <div style={styles.optionContent}>
              <h3 style={styles.optionTitle}>Suppression via l'application</h3>
              <p style={styles.optionDescription}>
                Le moyen le plus simple et le plus rapide :
              </p>
              <ol style={styles.steps}>
                <li>Ouvrez l'application PAKT</li>
                <li>Allez dans <strong>Paramètres</strong></li>
                <li>Sélectionnez <strong>Compte</strong></li>
                <li>Cliquez sur <strong>Supprimer mon compte</strong></li>
              </ol>
              <p style={styles.note}>
                ✓ Suppression instantanée et définitive
              </p>
            </div>
          </div>

          {/* Option 2: Email */}
          <div style={styles.option}>
            <div style={styles.optionNumber}>2</div>
            <div style={styles.optionContent}>
              <h3 style={styles.optionTitle}>Demande par email</h3>
              <p style={styles.optionDescription}>
                Si vous n'avez pas accès à l'application :
              </p>
              <button
                onClick={handleEmailClick}
                style={styles.emailButton}
              >
                📧 Envoyer une demande à paktsupport@gmail.com
              </button>
              <p style={styles.note}>
                Nous traiterons votre demande dans les 24-48 heures
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div style={styles.infoBox}>
            <h4 style={styles.infoTitle}>ℹ️ À savoir :</h4>
            <ul style={styles.infoList}>
              <li>La suppression de compte est <strong>irréversible</strong></li>
              <li>Toutes vos données seront supprimées dans un délai de 30 jours</li>
              <li>Vous pouvez créer un nouveau compte avec le même email après suppression</li>
              <li>Vos messages archivés seront supprimés selon notre politique de rétention</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            Des questions ? Contactez-nous à <a href="mailto:paktsupport@gmail.com" style={styles.link}>paktsupport@gmail.com</a>
          </p>
          <p style={styles.footerMeta}>
            PAKT © 2026 | <a href="/" style={styles.link}>Retour à l'accueil</a>
          </p>
        </div>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
  },
  card: {
    background: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
    border: '1px solid rgba(255, 215, 0, 0.2)',
    borderRadius: '16px',
    padding: '40px',
    maxWidth: '700px',
    width: '100%',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  logo: {
    fontSize: '48px',
    marginBottom: '15px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: '10px',
  },
  content: {
    marginBottom: '30px',
  },
  intro: {
    fontSize: '16px',
    color: '#d0d0d0',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  option: {
    display: 'flex',
    gap: '20px',
    marginBottom: '25px',
    padding: '20px',
    background: 'rgba(255, 215, 0, 0.05)',
    border: '1px solid rgba(255, 215, 0, 0.15)',
    borderRadius: '12px',
  },
  optionNumber: {
    minWidth: '40px',
    height: '40px',
    background: '#FFD700',
    color: '#000',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
    flexShrink: 0,
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: '8px',
  },
  optionDescription: {
    fontSize: '14px',
    color: '#b0b0b0',
    marginBottom: '12px',
  },
  steps: {
    marginLeft: '20px',
    marginBottom: '12px',
    color: '#d0d0d0',
    fontSize: '14px',
  },
  emailButton: {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #FFD700 0%, #FFC700 100%)',
    color: '#000',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '8px',
    marginBottom: '12px',
  },
  note: {
    fontSize: '13px',
    color: '#a0a0a0',
    fontStyle: 'italic',
  },
  infoBox: {
    background: 'rgba(255, 215, 0, 0.1)',
    border: '1px solid rgba(255, 215, 0, 0.3)',
    borderRadius: '12px',
    padding: '20px',
    marginTop: '30px',
  },
  infoTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: '12px',
  },
  infoList: {
    marginLeft: '20px',
    color: '#d0d0d0',
    fontSize: '14px',
    lineHeight: '1.8',
  },
  footer: {
    borderTop: '1px solid rgba(255, 215, 0, 0.2)',
    paddingTop: '20px',
    textAlign: 'center',
    color: '#a0a0a0',
    fontSize: '13px',
  },
  footerText: {
    marginBottom: '8px',
  },
  footerMeta: {
    marginTop: '8px',
    fontSize: '12px',
  },
  link: {
    color: '#FFD700',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
}
