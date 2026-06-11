function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-wrap footer-simple">
        <div>
          <h3>Maan Patel</h3>
          <p>Modern React portfolio with projects, blog pages, resume, CV download, contact form and live animated particles background.</p>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} Maan Patel. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
