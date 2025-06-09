// import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { leftLinks, navLinks, HeaderItemType } from '../constants/headerLinks';
import { useLogout } from '../features/auth/hooks/useLogout';
import { useAuthStore } from '../store/authStore';
import LogoutIcon from '@mui/icons-material/Logout';
import PrimaryButton from './PrimaryButton';

const Header: React.FC = () => {

  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const logoutMutation = useLogout();

  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
    navigate('/')
  }
  
  return (
    <header className="bg-purple shadow-sm h-auto">
      <div className="min-w-1xl w-auto mx-auto px-5 sm:px-5  flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-8">
          {leftLinks.map((item, idx) => {
            switch (item.type) {
              case HeaderItemType.Image:
                return (
                  <a key={idx} href={item.href} aria-label={item.alt}>
                    <img src={item.src} alt={item.alt} className="h-auto min-w-32 w-full max-w-[220px]" />
                  </a>
                );
              case HeaderItemType.Link:
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className="text-white hover:text-gray-200 transition-colors flex self-end pb-3"
                  >
                    {item.text}
                  </a>
                );
              case HeaderItemType.Button:
                return (
                  <div
                    key={idx}
                    className="text-white hover:text-gray-200 transition-colors rounded-bl-[30px"
                  >
                    {item.text}
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
        {/* Desktop Nav */}
        {user && (
          <nav className="flex self-end pb-3 md: space-x-8 text-white font-normal">
            {navLinks.map((item, idx) => {
              switch (item.type) {
                case HeaderItemType.Button:
                  return (
                    <PrimaryButton
                      key={idx}
                      error={false}
                      onClick={handleLogout}
                      disabled={logoutMutation.isPending}
                      sx={{ backgroundColor: 'white', color: 'rgba(220,30,131,1)', fontWeight: '600', height: '2rem', width: 'auto'}}
                    >
                      {logoutMutation.isPending ? 'Logging out...' : item.text}<LogoutIcon sx={{marginLeft: '1rem', fontSize: '2rem'}}/>
                    </PrimaryButton>
                  );
                default:
                  return null;
              }
            })}
          </nav>
        )}
      </div>
    </header>);
};

export default Header;