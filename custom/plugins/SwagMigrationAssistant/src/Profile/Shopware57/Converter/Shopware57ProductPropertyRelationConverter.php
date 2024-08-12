<?php declare(strict_types=1);
/*
 * (c) shopware AG <info@shopware.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace SwagMigrationAssistant\Profile\Shopware57\Converter;

use Shopware\Core\Framework\Log\Package;
use SwagMigrationAssistant\Migration\MigrationContextInterface;
use SwagMigrationAssistant\Profile\Shopware\Converter\ProductPropertyRelationConverter;
use SwagMigrationAssistant\Profile\Shopware\DataSelection\DataSet\ProductPropertyRelationDataSet;
use SwagMigrationAssistant\Profile\Shopware57\Shopware57Profile;

#[Package('services-settings')]
class Shopware57ProductPropertyRelationConverter extends ProductPropertyRelationConverter
{
    public function supports(MigrationContextInterface $migrationContext): bool
    {
        return $migrationContext->getProfile()->getName() === Shopware57Profile::PROFILE_NAME
            && $migrationContext->getDataSet() !== null
            && $this->getDataSetEntity($migrationContext) === ProductPropertyRelationDataSet::getEntity();
    }
}
