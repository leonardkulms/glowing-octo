const randomColor = () => {
    const colors = ['yellow', 'blue', 'pink', 'red', 'green', 'indigo', 'purple' ]
    const shades = [200, 300, 400, 500, 600, 700, 800]
    return `${colors[Math.floor(Math.random() * colors.length)]}-${shades[Math.floor(Math.random() * shades.length)]}`
  }

export const fromAndTo = () => {
    return `from-${randomColor()} to-${randomColor()}`;
  }