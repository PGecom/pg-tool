import React, { Component } from "react";
import { Row, Col, Collapse, Container } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import classname from "classnames";

//i18n
import { withNamespaces } from "react-i18next";

import { connect } from 'react-redux';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
          this.setState({ });
        }
    }

    componentDidMount() {
        var matchingMenuItem = null;
        var ul = document.getElementById("navigation");
        var items = ul.getElementsByTagName("a");
        for (var i = 0; i < items.length; ++i) {
            if (this.props.location.pathname === items[i].pathname) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
        }
    }

    activateParentDropdown = item => {
        item.classList.add("active");
        const parent = item.parentElement;
        if (parent) {
            parent.classList.add("active"); // li
            const parent2 = parent.parentElement;
            parent2.classList.add("active"); // li
            const parent3 = parent2.parentElement;
            if (parent3) {
                parent3.classList.add("active"); // li
                const parent4 = parent3.parentElement;
                if (parent4) {
                    parent4.classList.add("active"); // li
                    const parent5 = parent4.parentElement;
                    if (parent5) {
                        parent5.classList.add("active"); // li
                        const parent6 = parent5.parentElement;
                        if (parent6) {
                            parent6.classList.add("active"); // li
                        }
                    }
                }
            }
        }
        return false;
    };

    render() {
        return (
            <React.Fragment>
                <div className="topnav">
                    <Container fluid>
                        <nav className="navbar navbar-light navbar-expand-lg topnav-menu" id="navigation">
    
                            <Collapse isOpen={this.props.menuOpen} className="navbar-collapse" id="topnav-menu-content">
                                <ul className="navbar-nav">

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/dashboard">
                                            <i className="ri-dashboard-line mr-2"></i> {this.props.t('Dashboard Test')}
                                        </Link>
                                    </li>
    
                                    <li className="nav-item dropdown">
                                        <Link onClick={e => { e.preventDefault(); this.setState({ uiState: !this.state.uiState }); }} className="nav-link dropdown-toggle arrow-none" to="/#" id="topnav-uielement" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="ri-pencil-ruler-2-line mr-2"></i>{this.props.t('UI Elements')} <div className="arrow-down"></div>
                                        </Link>

                                        <div className={classname("dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl", {show : this.state.uiState})}
                                            aria-labelledby="topnav-uielement">
                                            <Row>
                                                <Col lg={4}>
                                                    <div>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Alerts')}</Link>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Buttons')}</Link>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Cards')}</Link>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Carousel')}</Link>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Dropdowns')}</Link>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Grid')}</Link>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Images')}</Link>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Lightbox')}</Link>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Modals')}</Link>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Range Slider')}</Link>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Round slider')}</Link>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Session Timeout')}</Link>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Progress Bars')}</Link>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Sweet-Alert')}</Link>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Tabs & Accordions')}</Link>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Typography')}</Link>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Video')}</Link>
                                                        <Link to="#" className="dropdown-item">{this.props.t('General')}</Link>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Rating')}</Link>
                                                        <Link to="#" className="dropdown-item">{this.props.t('Notifications')}</Link>
                                                    </div>
                                                </Col>
                                            </Row>

                                        </div>
                                    </li>
    
                                    <li className="nav-item dropdown">
                                        <Link onClick={e => { e.preventDefault(); this.setState({ appState: !this.state.appState }); }}  className="nav-link dropdown-toggle arrow-none" to="/#" id="topnav-apps" role="button">
                                            <i className="ri-apps-2-line mr-2"></i>{this.props.t('Apps')} <div className="arrow-down"></div>
                                        </Link>
                                        <div className={classname("dropdown-menu", { show: this.state.appState })} aria-labelledby="topnav-apps">

                                            <Link to="#" className="dropdown-item">{this.props.t('Calendar')}</Link>
                                            <Link to="#" className="dropdown-item">{this.props.t('Chat')}</Link>
                                            <div className="dropdown">
                                                <Link  onClick={e => {
                                                        e.preventDefault();
                                                        this.setState({ emailState: !this.state.emailState });
                                                    }} className="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-email"
                                                    role="button" >
                                                    {this.props.t('Email')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.emailState })} aria-labelledby="topnav-email">
                                                    <Link to="#" className="dropdown-item">{this.props.t('Inbox')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Read Email')}</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <Link  onClick={e => {
                                                        e.preventDefault();
                                                        this.setState({ ecommerceState: !this.state.ecommerceState });
                                                    }} className="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-ecommerce"
                                                    role="button">
                                                    {this.props.t('Ecommerce')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.ecommerceState })} aria-labelledby="topnav-ecommerce">
                                                    <Link to="#" className="dropdown-item">{this.props.t('Products')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Product Detail')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Orders')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Customers')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Cart')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Checkout')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Shops')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Add Product')}</Link>
                                                </div>
                                            </div>

                                            <Link to="#" className="dropdown-item">{this.props.t('Kanban Board')}</Link>
                                        </div>
                                    </li>
    
                                    <li className="nav-item dropdown">
                                        <Link  onClick={e => {
                                                e.preventDefault();
                                                this.setState({ componentState: !this.state.componentState });
                                            }} className="nav-link dropdown-toggle arrow-none" to="/#" id="topnav-components" role="button">
                                            <i className="ri-stack-line mr-2"></i>{this.props.t('Components')} <div className="arrow-down"></div>
                                        </Link>
                                        <div className={classname("dropdown-menu", { show: this.state.componentState })} aria-labelledby="topnav-components">
                                            <div className="dropdown">
                                                <Link onClick={e => {
                                                        e.preventDefault();
                                                        this.setState({ formState: !this.state.formState });
                                                    }} className="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-form"
                                                    role="button" >
                                                    {this.props.t('Forms')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.formState })} aria-labelledby="topnav-form">
                                                    <Link to="#" className="dropdown-item">{this.props.t('Elements')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Validation')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Advanced Plugins')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Editors')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('File Upload')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Xeditable')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Wizard')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Mask')}</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <Link  onClick={e => {
                                                        e.preventDefault();
                                                        this.setState({ tableState: !this.state.tableState });
                                                    }} className="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-table"
                                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    {this.props.t('Tables')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.tableState })} aria-labelledby="topnav-table">
                                                    <Link to="#" className="dropdown-item">{this.props.t('Basic Tables')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Data Tables')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Responsive Table')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Editable Table')}</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <Link  onClick={e => {
                                                        e.preventDefault();
                                                        this.setState({ chartState: !this.state.chartState });
                                                    }} className="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-charts">
                                                    {this.props.t('Charts')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.chartState })} aria-labelledby="topnav-charts">
                                                    <Link to="#" className="dropdown-item">{this.props.t('Apex charts')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Chartjs')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Jquery Knob Chart')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Sparkline Chart')}</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <Link onClick={e => {
                                                        e.preventDefault();
                                                        this.setState({ iconState: !this.state.iconState });
                                                    }} className="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-icons">
                                                    {this.props.t('Icons')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.iconState })} aria-labelledby="topnav-icons">
                                                    <Link to="#" className="dropdown-item">{this.props.t('Remix Icons')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Material Design')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Dripicons')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Font awesome 5')}</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <Link onClick={e => {
                                                        e.preventDefault();
                                                        this.setState({ mapState: !this.state.mapState });
                                                    }} className="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-map"
                                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    {this.props.t('Maps')} <div className="arrow-down"></div>
                                                </Link>
                                                <div  className={classname("dropdown-menu", { show: this.state.mapState })} aria-labelledby="topnav-map">
                                                    <Link to="#" className="dropdown-item">{this.props.t('Google Maps')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Vector Maps')}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li className="nav-item dropdown">
                                        <Link onClick={e => {
                                                e.preventDefault();
                                                this.setState({ extraState: !this.state.extraState });
                                            }} className="nav-link dropdown-toggle arrow-none" to="/#" id="topnav-more" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="ri-file-copy-2-line mr-2"></i>{this.props.t('Pages')} <div className="arrow-down"></div>
                                        </Link>
                                        <div className={classname("dropdown-menu", { show: this.state.extraState })} aria-labelledby="topnav-more">
                                            <div className="dropdown">
                                                <Link onClick={e => {
                                                        e.preventDefault();
                                                        this.setState({ authState: !this.state.authState });
                                                    }} className="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-auth"
                                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    {this.props.t('Authentication')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.authState })} aria-labelledby="topnav-auth">
                                                    <Link to="#" className="dropdown-item">{this.props.t('Login')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Register')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Recover Password')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Lock Screen')}</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <Link onClick={e => {
                                                        e.preventDefault();
                                                        this.setState({ utilityState: !this.state.utilityState });
                                                    }} className="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-utility"
                                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    {this.props.t('Utility')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.utilityState })} aria-labelledby="topnav-utility">
                                                    <Link to="#" className="dropdown-item">{this.props.t('Starter Page')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Maintenance')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Coming Soon')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Timeline')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('FAQs')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Pricing')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Error 404')}</Link>
                                                    <Link to="#" className="dropdown-item">{this.props.t('Error 500')}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                   </ul>
                            </Collapse>
                        </nav>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { leftSideBarType, leftSideBarTheme } = state.Layout;
    return { leftSideBarType, leftSideBarTheme };
}

export default withRouter(connect(mapStatetoProps, {})(withNamespaces()(Navbar)));
