import './Header.css'

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  return (
    <>
      <div className="top-banner">
        <div className="container">
          <p>欢迎全球合作伙伴垂询，携手构建更智能、更高效、更可持续的水未来</p>
        </div>
      </div>
      
      <header className="header">
        <div className="container header-container">
          <button 
            className="menu-toggle"
            aria-label="打开菜单"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <a href="/" className="logo">
            <span className="logo-text">东方巨擎</span>
            <span className="logo-subtitle">EAST GIANT</span>
          </a>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>关于我们</a>
            <a href="#products" onClick={() => setIsMenuOpen(false)}>核心产品</a>
            <a href="#advantages" onClick={() => setIsMenuOpen(false)}>技术优势</a>
            <a href="#global" onClick={() => setIsMenuOpen(false)}>全球业务</a>
            <a href="#contact" className="btn-contact" onClick={() => setIsMenuOpen(false)}>联系我们</a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
