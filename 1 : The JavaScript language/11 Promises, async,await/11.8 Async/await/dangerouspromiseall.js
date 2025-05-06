function allOrAggregateError(promises) {
    return Promise.allSettled(promises).then(results => {
      const errors = [];
      const values = [];
  
      results.forEach((res, i) => {
        if (res.status === 'fulfilled') {
          values[i] = res.value;
        } else {
          errors.push(res.reason);
        }
      });
  
      if (errors.length > 0) {
        throw new AggregateError(errors, 'One or more promises failed');
      }
  
      return values;
    });x    
  }

  alert(allOrAggregateError());