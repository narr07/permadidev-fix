export default defineAppConfig({
  ui: {
    primary: "permadi",
    gray: "permadi",
    container: {
      padding: "px-4 sm:px-10 lg:px-14",
      constrained: "max-w-7xl",
    },
    tabs: {
      container: "ring-1  ring-gray-200 dark:ring-gray-800",
      tab: {
        base: "ring-1  ring-gray-200 dark:ring-gray-800",
      },
    },
    card: {
      background: "bg-gray-100 dark:bg-gray-900",
      rounded: "rounded-md",
      body: {
        padding: "px-3 py-3 sm:p-5",
      },
      header: {
        padding: "px-3 py-3 sm:p-5",
      },
      footer: {
        padding: "px-3 py-3 sm:p-5",
      },
    },
  },
});
