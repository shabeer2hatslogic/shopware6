<?php declare(strict_types=1);
/*
 * (c) shopware AG <info@shopware.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace SwagMigrationAssistant\Profile\Shopware56\Converter;

use Shopware\Core\Framework\Log\Package;
use SwagMigrationAssistant\Migration\MigrationContextInterface;
use SwagMigrationAssistant\Profile\Shopware\Converter\ProductPropertyRelationConverter;
use SwagMigrationAssistant\Profile\Shopware\DataSelection\DataSet\ProductPropertyRelationDataSet;
use SwagMigrationAssistant\Profile\Shopware56\Shopware56Profile;

#[Package('services-settings')]
class Shopware56ProductPropertyRelationConverter extends ProductPropertyRelationConverter
{
    public function supports(MigrationContextInterface $migrationContext): bool
    {
        return $migrationContext->getProfile()->getName() === Shopware56Profile::PROFILE_NAME
            && $this->getDataSetEntity($migrationContext) === ProductPropertyRelationDataSet::getEntity();
    }
}
