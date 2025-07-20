import {GithubIcon} from "@/landing/icons/github-icon";
import {InstagramIcon} from "@/landing/icons/instagram-icon";
import {LinkedInIcon} from "@/landing/icons/linkedin-icon";
import {YTIcon} from "@/landing/icons/youtube-icon";
import {
    AnimatedLogo,
    AnimatedNavigation,
    AnimatedSocialIcon,
    AnimatedSocialLinks,
    FooterWrapper,
} from "./components/client-footer"

export function FooterSection() {
    return (
        <footer
            className="bg-background border-border  w-full border-t py-5"
            aria-label="Site footer"
        >
            <FooterWrapper>
                <div className="text-foreground flex items-center gap-6">
                    <AnimatedLogo darkSrc={"/logo/logo-dark.png"} lightSrc={"/logo/logo-light.png"} />
                    <AnimatedSocialLinks>
                        <AnimatedSocialIcon
                            href="https://github.com/KryKox"
                            ariaLabel="Visit my GitHub profile"
                        >
                            <GithubIcon />
                        </AnimatedSocialIcon>
                        <AnimatedSocialIcon
                            href="https://www.linkedin.com/in/lilian-c-a66886293/"
                            ariaLabel="Visit my LinkedIn profile"
                        >
                            <LinkedInIcon />
                        </AnimatedSocialIcon>
                        <AnimatedSocialIcon
                            href="https://www.youtube.com/@lilianpro-l3e"
                            ariaLabel="Visit my YouTube channel"
                        >
                            <YTIcon />
                        </AnimatedSocialIcon>
                        <AnimatedSocialIcon
                            href="https://www.instagram.com/lilian_tout_cour?igsh=MWQ3b2hwdWk0Y2twag%3D%3D&utm_source=qr"
                            ariaLabel="Visit my Instagram profile"
                        >
                            <InstagramIcon />
                        </AnimatedSocialIcon>
                    </AnimatedSocialLinks>
                </div>
                
                <nav
                    className="text-muted-foreground flex items-center gap-5 text-sm"
                    aria-label="Footer navigation"
                >
                    <AnimatedNavigation>
                        &copy; {new Date().getFullYear()} Lilian Caffier - All rights reserved.
                    </AnimatedNavigation>
                </nav>
            </FooterWrapper>
        </footer>
    )
}
