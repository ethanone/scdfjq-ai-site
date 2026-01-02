import './Advantages.css'

const Advantages = () => {
  return (
    <section id="advantages" className="advantages">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">技术优势与专业资质</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="advantages-grid">
          <div className="advantage-item">
            <div className="advantage-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3>技术驱动</h3>
            <p>公司是国家认证的高新技术企业，拥有一支由资深工程师和行业专家组成的研发团队。我们与多所顶尖大学及科研机构保持紧密合作，确保技术持续领先。</p>
          </div>
          
          <div className="advantage-item">
            <div className="advantage-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3>质量保证</h3>
            <p>公司的质量管理体系已通过ISO 9001国际认证，所有产品与解决方案的设计、制造和实施均遵循最严格的标准。</p>
          </div>
          
          <div className="advantage-item">
            <div className="advantage-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>知识产权</h3>
            <p>拥有多项与自动化控制、智慧水务相关的发明专利、软件著作权及自主核心技术。</p>
          </div>
          
          <div className="advantage-item">
            <div className="advantage-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
                <line x1="3" y1="9" x2="21" y2="9"></line>
              </svg>
            </div>
            <h3>完整交付能力</h3>
            <p>我们不仅提供软件与控制系统，还具备强大的系统集成能力，可提供包括低压成套开关柜、电机控制与保护设备、仪器仪表在内的硬件产品，实现"一站式"交付。</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages
