import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';

export default { title: 'Gatsby' };

export function Link() {
  return (
    <div>
      <GatsbyLink to="#">GatsbyLink</GatsbyLink>
    </div>
  );
}
