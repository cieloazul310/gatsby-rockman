import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from 'gatsby-theme-typescript-material-ui/src/layout';
import Programs from '../components/Programs';

function ProgramsPage() {
  return (
    <Layout title="放送回" maxWidth="md">
      <Typography variant="h5" component="h3">
        放送回一覧
      </Typography>
      <Programs />
    </Layout>
  );
}

export default ProgramsPage;
