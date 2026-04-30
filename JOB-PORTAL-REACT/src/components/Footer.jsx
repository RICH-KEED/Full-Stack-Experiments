function Footer() {
  return (
    <footer
      className="border-t text-center"
      style={{
        background: 'var(--surface)',
        borderColor: 'var(--surface-border)',
        padding: '5rem 1.5rem 3rem',
      }}
    >
      <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
        &copy; 2026 JobFinder Inc. All rights reserved.
      </p>
      <p className="text-sm mb-0" style={{ color: 'var(--text-muted)' }}>
        <a
          href="#"
          className="no-underline transition-colors duration-200"
          style={{ color: 'var(--primary)' }}
        >
          Privacy Policy
        </a>{' '}
        |{' '}
        <a
          href="#"
          className="no-underline transition-colors duration-200"
          style={{ color: 'var(--primary)' }}
        >
          Terms of Service
        </a>
      </p>
      <address
        className="not-italic text-sm mt-6"
        style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}
      >
        Contact us:{' '}
        <a
          href="mailto:support@jobfinder.com"
          className="no-underline"
          style={{ color: 'var(--primary)' }}
        >
          support@jobfinder.com
        </a>
        <br />
        584749 Main St, New York, NY
      </address>
    </footer>
  );
}

export default Footer;
