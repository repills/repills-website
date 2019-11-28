import React from 'react'

import BaseLayout from '../../components/layout/Layout'
import Hero from '../../components/hero/Hero'
import PageSection from '../../components/page-section/PageSection'
import { Input, Form, DatePicker } from 'antd'

const ContributionForm = ({
  form
}) => {
  const { getFieldDecorator } = form;

  return (
    <Form>
      <Form.Item
        label="Link"
        help="Paste the resource link including http:// or https://"
      >
        {
          getFieldDecorator('link', {
            rules: [
              {
                required: true,
                message: 'Please input the resource link',
              },
            ],
          })(
            <Input
              size="large"
            />
          )
        }
      </Form.Item>
      <Form.Item
        label="Title"
        help="The resource's title (e.g. the article title or the tool name)"
      >
        {
          getFieldDecorator('title', {
            rules: [
              {
                required: true,
                message: 'Please input the resource title',
              },
            ],
          })(
            <Input
              size="large"
            />
          )
        }
      </Form.Item>
      <Form.Item
        label="Author"
        help="The resource's author (person or company)"
      >
        {
          getFieldDecorator('author', {
            rules: [
              {
                required: true,
                message: 'Please input the resource author',
              },
            ],
          })(
            <Input size="large" />
          )
        }
      </Form.Item>
      <Form.Item
        label="Publication date"
        help="Enter the publication date of the resource (if available)"
      >
        {
          getFieldDecorator('publishedAt')(
            <DatePicker />
          )
        }
      </Form.Item>
    </Form>
  )
}

const WrappedForm = Form.create({ name: 'contribution' })(ContributionForm);

const ContributionPage = ({
  form
}) => {

  return (
    <BaseLayout>
      {
        ({WrapperElement}) => (
          <>
            <PageSection>
              <WrapperElement>
                <Hero
                  title="Contribution page"
                />
              </WrapperElement>
            </PageSection>
            <PageSection>
              <WrapperElement>
                <WrappedForm />
              </WrapperElement>
            </PageSection>
          </>
        )
      }
    </BaseLayout>
  )
}

export default ContributionPage;
