## setup

```
npx create-next-app@latest travel-blog
```

```
npm i react-icons clsx
```

## add layout class

```js
<body className={`${inter.className} overflow-x-hidden bg-[#fffcf2]`}>
  {children}
</body>
```

## config tailwind theme extend

```js
 theme: {
    extend: {
      colors: {
        primary: "#eb5e28",
        secondary: "#252422",
        tertiary: "#403d39",
        light: "#fffcf2",
      },
    },
  },
```

then can change the layout class to:

```js
className={`${inter.className} overflow-x-hidden bg-light`}
```

## create some folders

/app/(auth)
/app/(site)
/constants/: mock database(before create backend)

## create Navbar components

/shared/Navbar.tsx
/ui/Route.tsx: Navbar links
...

## stopPropagation

stopPropagation 是 JavaScript 中的一个方法，用于阻止事件传播。它主要用于事件处理程序，以防止事件冒泡或捕获到其他元素。事件传播有两种形式：冒泡和捕获。

冒泡 (Bubbling): 事件从目标元素开始，逐层向上传播到父元素，直到 document。
捕获 (Capturing): 事件从 document 开始，逐层向下传播到目标元素。
stopPropagation 可以阻止这两种形式的传播，使事件只在当前元素上处理，而不会传递到父元素或触发其他绑定在父元素上的事件处理程序。

```js
<div onClick={() => setOpenMobileMenu(false)}>
  <div onClick={(e) => e.stopPropagation()}></div>
</div>
```

# Backend

## NextAuth.js

- install next-auth
- install Adaptors - Prisma
