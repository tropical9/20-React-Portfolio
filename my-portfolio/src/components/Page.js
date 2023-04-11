import React from 'react';
import PageContent from '../PageContent';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

function Page({ currentPage }) {
    const renderPage = () => {
        switch(currentPage.name){
            case 'aboutme':
                return <AboutMe />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            case 'resume':
                return <Resume />;
            default:
                return <AboutMe />;
        }
    };

    return (
        <section>
            <h2>{currentPage.name}</h2>
            <PageContent>{renderPage()}</PageContent>
        </section>
    );
}
export default Page;