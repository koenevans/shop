function Footer() {
    return <footer className="page-footer
    deep-purple accent-1">
        <div className="footer-copyright">
            <div ClassName="container">
                © {new Date().getFullYear()}
                Полоцкий Константин 
                <a className="grey-text text-lighten-4 right"
                href="#!">Repository</a>
            </div>
        </div>
    </footer>
}

export { Footer };