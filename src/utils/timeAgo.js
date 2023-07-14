const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'week', seconds: 604800 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
      { label: 'second', seconds: 1 }
    ];
  
    const result = intervals.map(interval => {
      const count = Math.floor(seconds / interval.seconds);
      seconds %= interval.seconds;
      return count > 0 ? `${count} ${interval.label}${count === 1 ? '' : 's'}` : null;
    }).filter(interval => interval !== null);
  
    return result.length > 0 ? result.join(' ago') : 'Just now';
  }

  export default timeAgo;