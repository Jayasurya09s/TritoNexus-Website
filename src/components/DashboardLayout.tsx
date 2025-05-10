
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Footer from "./Footer";
import { Home, LayoutDashboard, Calendar, LogOut } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-muted/30">
      {/* Sticky Header/Navbar */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-sm px-4 py-3 border-b border-border">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="mr-4">
              <Logo />
            </Link>
            {title && <h1 className="text-xl font-semibold text-gradient hidden sm:block">{title}</h1>}
          </div>
          
          <div className="flex items-center space-x-3">
            <nav className="hidden md:flex items-center space-x-1">
              <Link 
                to="/dashboard" 
                className="px-3 py-2 rounded-md hover:bg-muted transition-colors flex items-center space-x-1"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              <Link 
                to="/workflow" 
                className="px-3 py-2 rounded-md hover:bg-muted transition-colors flex items-center space-x-1"
              >
                <Home className="h-4 w-4" />
                <span>Workflow</span>
              </Link>
              <Link 
                to="/gantt-chart" 
                className="px-3 py-2 rounded-md hover:bg-muted transition-colors flex items-center space-x-1"
              >
                <Calendar className="h-4 w-4" />
                <span>Gantt Chart</span>
              </Link>
            </nav>
            <ThemeToggle />
            <Link 
              to="/login" 
              className="btn-outline hover:bg-destructive/10 hover:text-destructive border-destructive/30 text-sm px-3 py-1.5 flex items-center space-x-1"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container-custom py-6 px-4">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashboardLayout;
