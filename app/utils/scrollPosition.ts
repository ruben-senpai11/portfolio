
export function getScrollPercentage(): number {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;
  const scrollableHeight = fullHeight - windowHeight;
  const scrollPercent = (scrollTop / scrollableHeight) * 100;

  return scrollPercent;
}

export function setupScrollListener(): void {
  const handleScroll = () => {
    const scrollPercent = (getScrollPercentage()).toFixed(0);
//    console.log(`Scroll Position: ${scrollPercent}%`);
    return (scrollPercent)
  };

  window.addEventListener('scroll', handleScroll);

  handleScroll();
}

setupScrollListener();
