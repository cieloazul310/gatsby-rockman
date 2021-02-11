import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AllCategoriesQuery } from '../../../graphql-types';

export function useAllCategories() {
  const data = useStaticQuery<AllCategoriesQuery>(graphql`
    query AllCategories {
      allProgram(sort: { fields: week, order: ASC }) {
        group(field: categories) {
          fieldValue
          edges {
            node {
              id
              week
              title
              date(formatString: "YYYY-MM-DD")
              fields {
                slug
                image
              }
            }
          }
        }
      }
    }
  `);
  return React.useMemo(() => {
    return data.allProgram.group.sort((a, b) => b.edges.length - a.edges.length);
  }, [data]);
}

export function useCategories(fieldValues: string[]) {
  const categories = useAllCategories();
  return React.useMemo(() => {
    return categories.filter((category) => category.fieldValue && fieldValues.includes(category.fieldValue));
  }, [fieldValues, categories]);
}