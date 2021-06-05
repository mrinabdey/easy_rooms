import Header from '../components/landing_page/Header';
import Navigation from '../components/landing_page/Navigation';

const NotesPage = () => {
    return (
        <div className="header_navbar_container" style={{position: 'fixed', top: '0px', left: '0px', width: '100vw'}}>
            <Header />
            <Navigation />
        </div>
    );
}

export default NotesPage;