import 'react-loading-skeleton/dist/skeleton.css';
import { Flex, Card, Box } from '@radix-ui/themes';
import Skeleton from 'react-loading-skeleton';

const LoadingIssueDetailPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton width="5rem" />
      <Flex gap="3">
        <Skeleton />
        <Skeleton className="8rem" />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
