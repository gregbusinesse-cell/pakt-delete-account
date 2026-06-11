'use client'

export default function ChildSafetyPage() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.logo}>🛡️</div>
          <h1 style={styles.title}>Politique de Sécurité des Enfants</h1>
        </div>

        {/* Content */}
        <div style={styles.content}>
          <p style={styles.intro}>
            PAKT s'engage à protéger la sécurité et la vie privée de tous les utilisateurs, y compris les mineurs.
          </p>

          {/* Section 1 */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🔒 Protection des Mineurs</h2>
            <ul style={styles.list}>
              <li><strong>Classification d'âge :</strong> L'app est classée 16+ (PEGI) / Adolescents (ESRB) selon les normes de sécurité des enfants</li>
              <li><strong>Accord parental :</strong> En Europe, les utilisateurs mineurs (16+) doivent obtenir l'accord des parents pour télécharger l'app</li>
              <li><strong>Aucun contenu sexuel :</strong> PAKT interdit strictement tout contenu sexuel explicite ou abusif</li>
              <li><strong>Pas de données sensibles :</strong> PAKT ne collecte pas de données biométriques, SSN, ou documents d'identité des mineurs</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🚫 Signalement et Blocage</h2>
            <ul style={styles.list}>
              <li><strong>Système de signalement :</strong> Les utilisateurs peuvent signaler tout contenu ou comportement abusif directement dans l'app</li>
              <li><strong>Blocage d'utilisateurs :</strong> Les utilisateurs peuvent bloquer n'importe quel utilisateur pour prévenir tout contact</li>
              <li><strong>Modération :</strong> Les signalements sont examinés et traités rapidement par notre équipe</li>
              <li><strong>Action :</strong> Les comptes violant notre politique sont suspendus ou supprimés</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>📋 Conformité Légale</h2>
            <ul style={styles.list}>
              <li><strong>RGPD :</strong> PAKT respecte complètement le Règlement Général sur la Protection des Données (UE)</li>
              <li><strong>COPPA :</strong> PAKT respecte le Children's Online Privacy Protection Act (USA) pour les utilisateurs mineurs</li>
              <li><strong>Lois locales :</strong> Conformité avec toutes les lois applicables en matière de protection des enfants dans chaque juridiction</li>
              <li><strong>Signalements obligatoires :</strong> PAKT signale toute violation présumée aux autorités compétentes</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>✉️ Contact et Support</h2>
            <p style={styles.contactText}>
              Pour toute question ou signalement concernant la sécurité des enfants, contactez :
            </p>
            <p style={styles.contactEmail}>
              📧 <strong>paktsupport@gmail.com</strong>
            </p>
            <p style={styles.contactNote}>
              Nous répondons à tous les signalements dans les 24-48 heures.
            </p>
          </div>

          {/* Info Box */}
          <div style={styles.infoBox}>
            <h4 style={styles.infoTitle}>⚠️ Signalez l'Abus</h4>
            <p style={styles.infoText}>
              Si vous constatez un contenu ou comportement abusif envers les enfants :
            </p>
            <ol style={styles.infoList}>
              <li>Utilisez le bouton "Signaler" dans l'app</li>
              <li>Contactez paktsupport@gmail.com avec les détails</li>
              <li>Signalez à votre autorité locale si nécessaire</li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            Dernière mise à jour : 2026-06-11
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
    maxWidth: '800px',
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
  section: {
    marginBottom: '30px',
    padding: '20px',
    background: 'rgba(255, 215, 0, 0.05)',
    border: '1px solid rgba(255, 215, 0, 0.15)',
    borderRadius: '12px',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: '15px',
  },
  list: {
    marginLeft: '20px',
    color: '#d0d0d0',
    fontSize: '14px',
    lineHeight: '1.8',
  },
  contactText: {
    fontSize: '14px',
    color: '#b0b0b0',
    marginBottom: '10px',
  },
  contactEmail: {
    fontSize: '16px',
    color: '#FFD700',
    marginBottom: '10px',
  },
  contactNote: {
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
  infoText: {
    fontSize: '14px',
    color: '#d0d0d0',
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
