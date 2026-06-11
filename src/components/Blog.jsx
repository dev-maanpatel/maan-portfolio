import { useState } from 'react'
import { blogs } from '../data/portfolio.js'

function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null)

  return (
    <section id="blog" className="section-padding">
      <div className="container">
        {!selectedBlog ? (
          <>
            <div className="section-head center">
              <p className="section-label">Blog</p>
              <h2 className="section-title">Blog Pages</h2>
              <p className="section-subtitle">Click any blog card to open the full blog content like your old portfolio pages.</p>
            </div>
            <div className="blog-grid">
              {blogs.map((blog) => (
                <button className="blog-card modern-card" key={blog.slug} onClick={() => setSelectedBlog(blog)}>
                  <img src={blog.image} alt={blog.title} />
                  <div className="blog-content">
                    <span>{blog.tag}</span>
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <b>Read More →</b>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          <article className="blog-detail modern-card">
            <button className="back-btn" onClick={() => setSelectedBlog(null)}>← Back to Blogs</button>
            <div className="blog-hero-img"><img src={selectedBlog.image} alt={selectedBlog.title} /></div>
            <p className="section-label">{selectedBlog.tag}</p>
            <h2 className="section-title">{selectedBlog.title}</h2>
            <p className="blog-lead">{selectedBlog.excerpt}</p>
            <div className="blog-detail-content">
              {selectedBlog.content.map((item) => (
                <div className="blog-point" key={item.heading}>
                  <h3>{item.heading}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </article>
        )}
      </div>
    </section>
  )
}

export default Blog
