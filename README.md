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
