
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.09 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const inquiryForm = document.getElementById('business-inquiry');
if (inquiryForm) {
  inquiryForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!inquiryForm.reportValidity()) return;

    const data = new FormData(inquiryForm);
    const isArabic = document.documentElement.lang === 'ar';
    const recipient = inquiryForm.dataset.recipient;
    const subject = isArabic
      ? `استفسار أعمال من ${data.get('company')}`
      : `Business inquiry from ${data.get('company')}`;
    const lines = isArabic
      ? [
          `الشركة: ${data.get('company')}`,
          `الدولة: ${data.get('country')}`,
          `الاسم: ${data.get('name')}`,
          `البريد الإلكتروني: ${data.get('email')}`,
          `مجال الأعمال: ${data.get('interest')}`,
          `المنتج / الخدمة: ${data.get('product') || '—'}`,
          `الكمية / نطاق المشروع: ${data.get('quantity') || '—'}`,
          '',
          'تفاصيل الاستفسار:',
          data.get('message')
        ]
      : [
          `Company: ${data.get('company')}`,
          `Country: ${data.get('country')}`,
          `Name: ${data.get('name')}`,
          `Email: ${data.get('email')}`,
          `Business area: ${data.get('interest')}`,
          `Product / service: ${data.get('product') || '—'}`,
          `Quantity / project scope: ${data.get('quantity') || '—'}`,
          '',
          'Inquiry details:',
          data.get('message')
        ];

    const status = inquiryForm.querySelector('.submission-status');
    if (status) {
      status.textContent = isArabic
        ? 'سيتم الآن فتح برنامج البريد لديك مع رسالة الاستفسار جاهزة للإرسال.'
        : 'Your email application will now open with the inquiry prepared for sending.';
    }
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  });
}
