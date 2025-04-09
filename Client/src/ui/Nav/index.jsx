import React, { useState } from "react";
import GithubButton from "../GithubButton";
import LinkedInButton from "../LinkedInButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars } from "react-icons/fa";

function TopNav() {
    const isMobile = useSelector((state) => state.mobile.isMobile);
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => setShowMenu(true);
    const closeMenu = () => setShowMenu(false);

    const mobileMenuContent = (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "20px",
            }}
        >
            <GithubButton
                url="https://github.com/izy345"
                style={{
                    backgroundColor: "#94d1ce",
                    padding: "8px",
                    borderRadius: "4px",
                    textAlign: "center",
                }}
            />
            <LinkedInButton
                url="https://www.linkedin.com/in/israel-g-b9b31a25b/"
                style={{
                    backgroundColor: "#0077b5",
                    padding: "8px",
                    borderRadius: "4px",
                    textAlign: "center",
                }}
            />
            <button
                style={{
                    backgroundColor: "#54807e",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "bold",
                }}
                onClick={() => {
                    closeMenu();
                    navigate("/citations");
                }}
            >
                Citations
            </button>
        </div>
    );

    return (
        <>
            <nav
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "50px",
                    backgroundColor: "rgba(148, 178, 194, 0.9)",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 20px",
                    zIndex: 1000,
                }}
            >
                <section style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                    Israel's Portfolio
                </section>

                {isMobile ? (
                    <section>
                        <button
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: 0,
                            }}
                            onClick={openMenu}
                        >
                            <FaBars size={24} color="#000" />
                        </button>
                    </section>
                ) : (
                    <section
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <GithubButton
                            url="https://github.com/izy345"
                            style={{
                                backgroundColor: "#94d1ce",
                                padding: "4px",
                                borderRadius: "4px",
                            }}
                        />
                        <LinkedInButton
                            url="https://www.linkedin.com/in/israel-g-b9b31a25b/"
                            style={{
                                backgroundColor: "#0077b5",
                                padding: "4px",
                                borderRadius: "4px",
                            }}
                        />
                        <button
                            style={{
                                backgroundColor: "#54807e",
                                padding: "4px 8px",
                                borderRadius: "4px",
                                border: "none",
                                cursor: "pointer",
                                fontWeight: "bold",
                            }}
                            onClick={() => {
                                navigate("/citations");
                            }}
                        >
                            <span>Citations</span>
                        </button>
                    </section>
                )}
            </nav>

            {isMobile && (
                <Offcanvas show={showMenu} onHide={closeMenu} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>{mobileMenuContent}</Offcanvas.Body>
                </Offcanvas>
            )}
        </>
    );
}

export default TopNav;
