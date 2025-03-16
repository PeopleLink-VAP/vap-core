
import { Sun, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy text-warmWhite py-12 relative overflow-hidden">
      {/* Decorative sunflower elements */}
      <div className="absolute top-0 right-20 w-36 h-36 bg-sunflower/10 rounded-full animate-spin-slow"></div>
      <div className="absolute -bottom-20 left-20 w-48 h-48 bg-sunflower/5 rounded-full animate-spin-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Sun className="text-sunflower w-8 h-8" />
              <span className="font-bold text-xl">Virtual Assistant Pro</span>
            </div>
            <p className="text-warmWhite/80 mb-6">
              Đào tạo và phát triển kỹ năng chuyên nghiệp cho các Trợ Lý Ảo tại Việt Nam.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-warmWhite/10 rounded-full flex items-center justify-center hover:bg-sunflower hover:text-navy transition-colors hover:scale-110">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-warmWhite/10 rounded-full flex items-center justify-center hover:bg-sunflower hover:text-navy transition-colors hover:scale-110">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-warmWhite/10 rounded-full flex items-center justify-center hover:bg-sunflower hover:text-navy transition-colors hover:scale-110">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-warmWhite/10 rounded-full flex items-center justify-center hover:bg-sunflower hover:text-navy transition-colors hover:scale-110">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-sunflower rounded-full"></span>
              Khóa Học
            </h4>
            <ul className="space-y-2">
              <li><Link to="/courses-view" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Kỹ Năng Hành Chính</Link></li>
              <li><Link to="/courses-view" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Phát Triển Nghề Nghiệp</Link></li>
              <li><Link to="/courses-view" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Quản Lý Khách Hàng</Link></li>
              <li><Link to="/courses-view" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Điều Phối Dự Án</Link></li>
              <li><Link to="/courses-view" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Giải Pháp Cá Nhân Hóa</Link></li>
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-sunflower rounded-full"></span>
              Giới Thiệu
            </h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Về Chúng Tôi</Link></li>
              <li><Link to="/team" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Đội Ngũ Đào Tạo</Link></li>
              <li><Link to="/training-program" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Chương Trình Đào Tạo</Link></li>
              <li><Link to="/career-opportunities" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Cơ Hội Nghề Nghiệp</Link></li>
              <li><Link to="/contact" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Liên Hệ</Link></li>
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-sunflower rounded-full"></span>
              Tài Nguyên
            </h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Blog</Link></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Tài Liệu Học Tập</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Tài Nguyên VA</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Câu Hỏi Thường Gặp</a></li>
              <li><a href="#" className="text-warmWhite/80 hover:text-sunflower transition-colors hover:translate-x-1 inline-block">Chính Sách Bảo Mật</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-warmWhite/20 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-warmWhite/70 text-sm animate-fade-in" style={{ animationDelay: "0.4s" }}>
            © 2025 Virtual Assistant Pro. Tất cả quyền được bảo lưu.
          </div>
          
          {/* Animated sunflower icon */}
          <div className="animate-float">
            <svg height="48px" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M45 25C45 25.8583 44.7 26.7167 44.1417 27.4833C43.65 28.15 42.9667 28.7417 42.1667 29.1833C41.4333 29.5917 40.5917 29.8 39.7 29.8C39.0667 29.8 38.4167 29.6917 37.75 29.4833C36.9583 29.2417 36.0917 29.1333 35.05 29.1583C35.7667 29.85 36.525 30.4083 37.3583 30.8583C38.675 31.5667 39.6583 32.7417 40.0667 34.0833C40.6583 36.0417 40.3083 37.9833 39.1333 39.1417C38.35 39.9333 37.2417 40.35 35.95 40.35C35.35 40.35 34.7583 40.2667 34.175 40.0917C32.8167 39.7083 31.6333 38.675 30.8417 37.2C30.45 36.4667 29.9083 35.7667 29.1667 35.05C29.1833 36.05 29.325 36.975 29.6 37.8833C30.025 39.3333 29.9 40.8167 29.2333 42.075C28.275 43.8833 26.65 45 25 45C24.1417 45 23.2833 44.7 22.5167 44.1417C21.85 43.65 21.2583 42.9667 20.8167 42.1667C20.1167 40.9167 20.0167 39.35 20.5167 37.75C20.7583 36.9583 20.8667 36.0917 20.8417 35.05C20.15 35.7667 19.5917 36.525 19.1417 37.3583C18.4333 38.675 17.2583 39.6583 15.9167 40.0667C15.2917 40.2583 14.6583 40.35 14.0583 40.35C12.7917 40.35 11.6417 39.9333 10.8583 39.1333C10.0667 38.35 9.65 37.2417 9.65 35.95C9.65 35.35 9.73333 34.7583 9.90833 34.175C10.2917 32.8167 11.325 31.6333 12.8 30.8417C13.5333 30.45 14.2333 29.9083 14.95 29.1667C13.95 29.1833 13.025 29.325 12.1167 29.6C11.55 29.7667 10.9833 29.85 10.425 29.85C9.55 29.85 8.7 29.6417 7.925 29.2333C6.11667 28.275 5 26.65 5 25C5 24.1417 5.3 23.2833 5.85833 22.5167C6.35 21.85 7.03333 21.2583 7.83333 20.8167C9.08333 20.1167 10.65 20.0167 12.25 20.5167C13.0417 20.7583 13.9083 20.8667 14.95 20.8417C14.2333 20.15 13.475 19.5917 12.6417 19.1417C11.325 18.4333 10.3417 17.2583 9.93333 15.9167C9.34167 13.9583 9.69167 12.0167 10.8667 10.8583C11.65 10.0667 12.7583 9.65 14.05 9.65C14.65 9.65 15.2417 9.73333 15.825 9.90833C17.1833 10.2917 18.3667 11.325 19.1583 12.8C19.55 13.5333 20.0917 14.2333 20.8333 14.95C20.8167 13.95 20.675 13.025 20.4 12.1167C19.975 10.6667 20.1 9.18333 20.7667 7.925C21.725 6.11667 23.35 5 25 5C25.8583 5 26.7167 5.3 27.4833 5.85833C28.15 6.35 28.7417 7.03333 29.1833 7.83333C29.8833 9.08333 29.9833 10.65 29.4833 12.25C29.2417 13.0417 29.1333 13.9083 29.1583 14.95C29.85 14.2333 30.4083 13.475 30.8583 12.6417C31.5667 11.325 32.7417 10.3417 34.0833 9.93333C36.0417 9.34167 37.9833 9.69167 39.1417 10.8667C39.9333 11.65 40.35 12.7583 40.35 14.05C40.35 14.65 40.2667 15.2417 40.0917 15.825C39.7083 17.1833 38.675 18.3667 37.2 19.1583C36.4667 19.55 35.7667 20.0917 35.05 20.8333C36.05 20.8167 36.975 20.675 37.8833 20.4C39.3333 19.975 40.8167 20.1 42.075 20.7667C43.8833 21.725 45 23.35 45 25Z" fill="#FDD31E"></path>
              <path d="M32.5 25C32.5 25.3667 32.4667 25.75 32.4083 26.1833C32.4083 26.225 32.3917 26.2667 32.3833 26.3083C32.3167 26.7167 32.2083 27.1167 32.0667 27.5083C31.9417 27.875 31.775 28.2417 31.5833 28.5833C31.5583 28.65 31.4833 28.7833 31.4 28.9083C31.3167 29.0583 31.1917 29.2417 31.0667 29.4167C30.6167 30.0333 30.075 30.575 29.4583 31.025C29.4333 31.05 29.4083 31.075 29.375 31.0917C28.4333 31.7667 27.325 32.225 26.1833 32.4083C25.8167 32.4667 25.425 32.5 25 32.5C24.6333 32.5 24.25 32.4667 23.8167 32.4083C23.7667 32.4 23.725 32.3917 23.675 32.375H23.65C23.5417 32.3583 23.4333 32.3333 23.325 32.3083C23.2083 32.2833 23.0583 32.25 22.8917 32.2C22.8083 32.175 22.675 32.1333 22.525 32.075C22.175 31.9583 21.7917 31.7917 21.425 31.5833C21.3583 31.5583 21.2167 31.4833 21.0917 31.4C20.9417 31.3167 20.7583 31.1917 20.5833 31.0667C19.9667 30.6167 19.425 30.075 18.975 29.4583C18.95 29.4333 18.925 29.4083 18.9083 29.375C18.2333 28.4333 17.775 27.325 17.5917 26.1833C17.5333 25.8167 17.5 25.425 17.5 25C17.5 24.6333 17.5333 24.25 17.5917 23.8167C17.5917 23.775 17.6083 23.725 17.6167 23.6833C17.8083 22.575 18.2667 21.5 18.9333 20.5833C19.3917 19.95 19.9667 19.3833 20.6167 18.9083C21.9083 17.9833 23.4167 17.5 25 17.5C25.3667 17.5 25.75 17.5333 26.1833 17.5917C26.225 17.5917 26.275 17.6083 26.3167 17.6167C27.425 17.8083 28.4917 18.2667 29.4167 18.9333C29.4417 18.9583 29.4667 18.975 29.5 19C30.075 19.425 30.5917 19.9417 31.025 20.5417C31.05 20.5667 31.075 20.5917 31.0917 20.625C31.7667 21.5667 32.225 22.675 32.4083 23.8167C32.4667 24.1833 32.5 24.575 32.5 25Z" fill="#AA6228"></path>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
