import BlogDetails from "../../_components/Blog/BlogDetails";
import RenderMdx from "../../_components/Blog/RenderMdx";
import Tag from "../../_components/Elements/Tag";
import siteMetadata from "../../sitemetadata";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Box, Container, Divider, Flex, Heading, Link, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import ContactForm from "src/app/_components/features/contactForm";
import BlogLayoutOne from "src/app/_components/Blog/BlogLayoutOne";
import RecentPosts from "src/app/_components/blogHome/RecentPosts";


export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if(!blog){
    notFound()
  }


  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": blog.title,
    "description": blog.description,
    "image": imageList,
    "datePublished": new Date(blog.publishedAt).toISOString(),
    "dateModified": new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    "author": [{
        "@type": "Person",
        "name": blog?.author ? [blog.author] : siteMetadata.author,
        "url": siteMetadata.twitter,
      }]
  }
  const bgColor = "gray.900";
  const overlayColor = "rgba(0, 0, 0, 0.6)";

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Box w={'100%'} display={'flex'} flexDirection={'column'}>
        <Box
          mb="8"
          textAlign="center"
          position="relative"
          w="full"
          h="70vh"
          mt={'6rem'}
          bg={bgColor}
        >
          <Flex
            w="full"
            zIndex="10"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Tag
              name={blog.tags[0]}
              link={`/categories/${slug(blog.tags[0])}`}
              className="px-6 text-sm py-2"
            />
            <Heading
              mt="6"
              fontWeight={'700'}
              textTransform="capitalize"
              color="#FFFFFF"
              fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }}
              lineHeight={{md:'58.56px',base:'32px'}}
            >
              {blog.title}
            </Heading>
          </Flex>
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            h="full"
            bg={overlayColor}
          />
          <Image
            src={blog.image.filePath.replace("../public", "")}
            placeholder="blur"
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            priority
            sizes="100vw"
          />
        </Box>
        <Container minW="100%" mt="0" px={{ base: 7, md: 14 }}>
          <Flex
            textColor="white"
            gridColumnGap={{ lg: 8, sxl: 16 }}
            // gridRowGap={12}
            gap={{md:'4rem',base:'2rem'}}
            mt="8"
          >
            <Box flex="1 1 70%">
              <RenderMdx blog={blog} />
            </Box>
            <Divider h={'auto'} orientation="vertical" borderColor={'#262626'}/>
            <Box  as="aside" flex="1 1 30%">
            <BlogDetails blog={blog} slug={params.slug} />

              <details
                style={{
                  // border: "1px solid",
                  // borderColor: "gray.800",
                  color: "#FFFFF",
                  borderRadius: "10px",
                  background:'#FFFFF',
                  padding: "1rem",
                  position: "sticky",
                  top: "1.5rem",
                  // maxHeight: "80vh",
                  // overflow: "hidden",
                  overflowY: "auto",
                }}
                open
              >
                <summary className="text-lg text-#98989A font-400 capitalize cursor-pointer">
                  Table Of Content
                </summary>
                <VStack as="ul" mt="4" fontSize="base" bg={'#1A1A1A'} borderRadius={'10px'} p={{md:'1rem',base:'0.5rem'}} align="stretch">
                  {blog.toc.map((heading) => (
                    <Box as="li" py="1" key={`#${heading.slug}`}>
                      <Link
                        href={`#${heading.slug}`}
                        data-level={heading.level}
                        pl={heading.level === "three" ? 4 : 0}
                        pt={heading.level === "two" ? 2 : 0}
                        borderTop={heading.level === "two" ? "1px solid" : "none"}
                        borderColor={heading.level === "two" ? "gray.400" : "none"}
                        display="flex"
                        alignItems="center"
                      >
                        {heading.level === "three" && (
                          <Box
                            w="1"
                            h="1"
                            borderRadius="full"
                            bg="white"
                            mr="2"
                          />
                        )}
                        {/* {heading.level === "two" && (
                          <Box
                            w="4"
                            h="0.5"
                            borderRadius="full"
                            bg="white"
                            mr="2"
                          />
                        )} */}
                        <Text _hover={{ textDecoration: "underline" }}>
                          {heading.text}
                        </Text>
                      </Link>
                    </Box>
                  ))}
                </VStack>
              </details>
            </Box>
          </Flex>
        </Container>
        <Container minW="100%" mt={"4"} px={{ base: 7, md: 14 }}>
          {/* <Box>
             <Box bg={'#262626'} borderRadius={'10px'} color={'#98989A'}>View All News</Box>  
             <Text color={'#CCCCCC'} fontWeight={'500'} lineHeight={'30.33px'}>Similar Blogs</Text>
          </Box> */}
          <RecentPosts blogs={allBlogs} />
        </Container>
      </Box>
      <ContactForm/>
    </>
   
  );
}
