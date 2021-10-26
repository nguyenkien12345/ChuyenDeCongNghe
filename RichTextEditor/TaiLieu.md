Rich Text Editor
#### Giải pháp nào để xây dựng Rich Text Editor giống các hệ thống lớn?

#### Các hệ thống lớn đang có Editor riêng của họ
- Facebook: Đăng status (hastag, tag friends, ...), chat (emoji, ...)
- Gitlab, Github: Mô tả task, link tới pull requests, tag member, upload media, ...
- Medium: Soạn thảo bài viết tin tức, blog

#### Tại sao không nên dùng CKEditor?
- Thư viện để nhúng Rich Text Editor
- Không hỗ trợ tốt dưới Mobile App (Android và IOS) (Content thu được là HTML mà html chỉ hiển thị tốt trên nền tảng web thôi còn dưới mobile khó tuỳ chỉnh)
- Khó custom cho mục đích riêng
- Không phù hợp lắm với các ứng dụng xây bằng React, Vue hoặc Angular (Những ứng dụng SPA (Single Page Application) hay còn gọi là CSR (Client Side Rendering)

#### Giải pháp?
- Mô hình hoá toàn bộ nội dung của Rich Text Editor thành State (Json)
-> Điều chỉnh cơ chế hiển thị ở nhiều nền tảng khác nhau (Web,IOS,Android,...)

#### Vấn đề:
- Quản lí tính năng Undo, Redo,...
- Làm sao tái sử dụng, dễ mở rộng tính năng
- Quản lý vị trí con trỏ chuột trong khung soạn thảo
- Quản lý selection (Bôi đen 1 đoạn text trong vùng soạn thảo)
- ...

<!-- Tài liệu: Trần Công Lực -->
<!-- Sử dụng thư viện: Draft.js -->