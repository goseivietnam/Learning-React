# Thiết lập môi trường phát triển

Dưới đây là những những bước được yêu cầu để thiết lập môi trường phát triển trước khi bắt đâu học về `ReactJS`

## Cài đặt `NVM` (Node Version Manager)

`nvm` là 1 trình để quản lí, cài đặt, chuyển đổi giữa các phiên bản `NodeJS` khác nhau 1 cách dễ dàng, vì vậy nó giúp chúng ta có thể dùng nhiều phiên bản `NodeJS` khác nhau trên cùng 1 máy. Dưới đây là những bước để cài đặt `nvm`:

- Windows: [Install NVM](https://github.com/coreybutler/nvm-windows)
- Linux & MacOS: [Install NVM](https://github.com/nvm-sh/nvm)

## Cài đặt NodeJS

Sau khi cài đặt xong `nvm` chúng ta sẽ tiến hành cài đặt `NodeJS`:

```cmd
> nvm install lts
> nvm use 18.16.0
```

Sau khi cài đặt xong chúng ta sẽ kiểm tra xem `NodeJS` và `NPM` đã thành công hay chưa bằng cách chạy các dòng lệnh sau:

```cmd
> node -v
> npm -v
```

## Cài đặt `PNPM` (Node Package Manager)

`pnpm` là 1 trình để quản lí các packages trong dự án tương tự như `npm` hay `yarn` nhưng hiệu quả hơn. Để cài đặt `pnpm` và kiếm tra xem `pnpm` đã được cài đặt chưa chúng ta sẽ chạy dòng lệnh sau:

```cmd
> npm install -g pnpm
> pnpm -v
```

Với ai quen sử dụng `yarn` chúng ta có thể chạy các dòng lệnh sau để cài đặt và kiểm tra:

```cmd
> npm install -g yarn
> yarn -v
```

## Cài đặt thêm 1 số utilities

- `rimraf` là 1 chương trình dòng lệnh giúp xóa file hiệu quả và nhanh chóng, hỗ trợ xóa file sử dụng glob
- `kill-port` là 1 chương trình dòng lệnh giúp kill 1 port đang sử dụng

```cmd
> npm install -g rimraf
> npm install -g kill-port
```
