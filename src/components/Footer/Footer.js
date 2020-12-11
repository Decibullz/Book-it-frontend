import './Footer.css'

export default function Footer(props){
    return(
        <footer className="Footer">
            <p>
            Copyright &copy; Book-It {new Date().getFullYear()} All Rights Reserved 
            </p>
        </footer>
    )
}